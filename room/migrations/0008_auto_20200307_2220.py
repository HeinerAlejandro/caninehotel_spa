# Generated by Django 2.2.2 on 2020-03-08 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0007_auto_20200307_1856'),
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
