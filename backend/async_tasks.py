from backend.celery import sample_print, facebook_manager, twitter_manager, sms_manager, email_manager, startupGuidelineDatabase
from backend.guidelines import postGuidelines
from backend.models import Guideline

startupGuidelineDatabase.delay()
sms_manager.delay()
facebook_manager.delay()
email_manager.delay()

<<<<<<< HEAD
# facebook_manager.delay() 
#can call this as many times as you want cuz it will check if the database already has data. if not, add data to database
=======
# can call this as many times as you want cuz it will check if the database already has data. if not, add data to database

>>>>>>> c7d18ae5090d834cd9bcff162cee3dfef5826acc
# print(Guideline.objects.all())
# #postGuidelines('Dengue')
