from django.contrib import admin
from .models import Property


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
	list_display = ("id", "title", "price", "status", "owner", "created_at")
	list_filter = ("status", "created_at")
	search_fields = ("title", "address")
