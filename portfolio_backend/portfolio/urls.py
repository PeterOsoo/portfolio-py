from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutViewSet, SkillViewSet, ExperienceViewSet, ProjectViewSet, ContactViewSet

router = DefaultRouter()
router.register('about', AboutViewSet)
router.register('skills', SkillViewSet)
router.register('experience', ExperienceViewSet)
router.register('projects', ProjectViewSet)
router.register('contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
