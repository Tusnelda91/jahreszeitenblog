class Post < ActiveRecord::Base
    validates :title, :content, :presence => true
    #Titel und Inhalt müssen da sein, um neuen Eintrag zu erstellen
    validates :title, :length => { :minimum => 5}
    #Titel  muss mindestens 5 Zeichen lang sein
    #validates :title, :uniqueness => true
    #Titel darf sich nicht wiederholen
    
    extend FriendlyId
    friendly_id :title, use: :slugged
end
