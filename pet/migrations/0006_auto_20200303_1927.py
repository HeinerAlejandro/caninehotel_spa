# Generated by Django 3.0.3 on 2020-03-03 23:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0001_initial'),
        ('service', '0001_initial'),
        ('pet', '0005_pet_rooms'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='rooms',
            field=models.ManyToManyField(blank=True, null=True, to='room.Room'),
        ),
        migrations.AlterField(
            model_name='pet',
            name='services',
            field=models.ManyToManyField(blank=True, null=True, to='service.Service'),
        ),
    ]
