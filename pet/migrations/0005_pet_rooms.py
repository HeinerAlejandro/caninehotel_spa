# Generated by Django 3.0.3 on 2020-03-03 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0001_initial'),
        ('pet', '0004_pet_services'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='rooms',
            field=models.ManyToManyField(to='room.Room'),
        ),
    ]