# Generated by Django 2.2.2 on 2020-03-08 02:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0008_auto_20200307_2220'),
        ('pet', '0013_remove_pet_room'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='room',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='room.Room'),
        ),
    ]
