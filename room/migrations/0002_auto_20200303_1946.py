# Generated by Django 3.0.3 on 2020-03-03 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='id',
        ),
        migrations.AlterField(
            model_name='room',
            name='number',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
