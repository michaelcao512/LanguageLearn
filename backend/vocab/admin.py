from django.contrib import admin
from .models import Vocab, VocabSet, Language

# Register your models here.

admin.site.register(Vocab)
admin.site.register(VocabSet)
admin.site.register(Language)
