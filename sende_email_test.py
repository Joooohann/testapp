import smtplib
import email.mime.text
import MIMEText

text = "Hallo"

mail = MIMEText(text)
mail['Subject'] = "Hallo!"
mail['From'] = "Hans <hanssaft99@gmail.com>"
mail['To'] = "hanssaft99@gmail.com"

sender = smtplib.SMTP()
