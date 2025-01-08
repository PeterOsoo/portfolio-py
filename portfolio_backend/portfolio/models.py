from django.db import models

# Create your models here.


class About(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    profile_image = models.URLField()


class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=50)  # Beginner, Intermediate, Expert


class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField()


class Contact(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    linkedin = models.URLField()
