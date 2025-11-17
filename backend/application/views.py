from rest_framework import viewsets, generics, permissions, filters
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import get_user_model

from .models import Property
from .serializers import PropertySerializer, RegisterSerializer, UserSerializer

User = get_user_model()


class RegisterView(generics.CreateAPIView):
	queryset = User.objects.all()
	permission_classes = (permissions.AllowAny,)
	serializer_class = RegisterSerializer


class PropertyViewSet(viewsets.ModelViewSet):
	queryset = Property.objects.all().order_by("-created_at")
	serializer_class = PropertySerializer
	filter_backends = [filters.SearchFilter, filters.OrderingFilter]
	search_fields = ["title", "description", "address"]
	ordering_fields = ["price", "created_at"]

	def perform_create(self, serializer):
		if self.request.user and self.request.user.is_authenticated:
			serializer.save(owner=self.request.user)
		else:
			serializer.save()

	def get_permissions(self):
		if self.action in ("create", "update", "partial_update", "destroy"):
			return [permissions.IsAuthenticated()]
		return [permissions.AllowAny()]

	@action(detail=False, methods=["get"], permission_classes=[permissions.AllowAny])
	def mine(self, request):
		if not request.user or not request.user.is_authenticated:
			return Response({"detail": "Authentication required."}, status=401)
		qs = self.queryset.filter(owner=request.user)
		serializer = self.get_serializer(qs, many=True)
		return Response(serializer.data)
