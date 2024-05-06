from rest_framework import viewsets
from .models import Vocab, VocabSet, Language
from .serializers import VocabSerializer, VocabSetSerializer, LanguageSerializer


class VocabViewSet(viewsets.ModelViewSet):
    queryset = Vocab.objects.all()
    serializer_class = VocabSerializer


class VocabSetViewSet(viewsets.ModelViewSet):
    queryset = VocabSet.objects.all()
    serializer_class = VocabSetSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

