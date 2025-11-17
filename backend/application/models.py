from django.db import models
from django.conf import settings


class Property(models.Model):
	STATUS_CHOICES = (
		("available", "Available"),
		("sold", "Sold"),
		("under_offer", "Under Offer"),
	)

	title = models.CharField(max_length=200)
	description = models.TextField(blank=True)
	price = models.DecimalField(max_digits=12, decimal_places=2)
	address = models.CharField(max_length=300, blank=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="available")
	owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self) -> str:
		return f"{self.title} — {self.address or 'No address'}"
