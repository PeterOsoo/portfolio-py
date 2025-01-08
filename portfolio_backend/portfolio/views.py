from django.shortcuts import render

from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import About, Skill, Experience, Project, Contact
from .serializers import AboutSerializer, SkillSerializer, ExperienceSerializer, ProjectSerializer, ContactSerializer

# Create your views here.


class AboutViewSet(ReadOnlyModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class SkillViewSet(ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ExperienceViewSet(ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ProjectViewSet(ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ContactViewSet(ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
