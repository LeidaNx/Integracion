from django.urls import path, include
from rest_framework import routers
from tareas import views
from rest_framework.documentation import include_docs_urls


routers = routers.DefaultRouter()
routers.register(r'tareas', views.TaskView, 'tareas')


urlpatterns = [
    path("api/v1.0/", include(routers.urls)),
    path('docs/', include_docs_urls(title="Transporte API"))
]