from rest_framework import serializers
from .models import Vocab, VocabSet, Language


class VocabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocab
        fields = ["id", "word", "definition", "notes", "vocab_set"]


class VocabSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = VocabSet
        fields = ["id", "name", "language"]


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ["id", "name"]