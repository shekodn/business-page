class UserMailer < ApplicationMailer

    default from: "sdiazn19@gmail.com"
    default to: "sdiazn19@gmail.com"

    def new_message(message)
        @message = message
        mail(subject: "[misawahousing.com] #{message.subject}")
    end



end
