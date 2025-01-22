from django.db import models

# Create your models here.


class About(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    profile_image = models.URLField()
    profession = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=50)  # Beginner, Intermediate, Expert

    def __str__(self):
        return self.name


class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    company_website = models.URLField(null=True, blank=True)
    project_link = models.URLField(null=True, blank=True)

    def __str__(self):
        return f"{self.role} at {self.company}"


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()  # Short summary for the projects page
    details = models.TextField(blank=True, null=True)
    # In-depth details for modal or dedicated page
    link = models.URLField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    technologies_used = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    linkedin = models.URLField()

    def __str__(self):
        return self.email
