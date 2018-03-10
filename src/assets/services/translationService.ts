// Base Imports
import { NavController } from 'ionic-angular';

// Import for localStorage
import { Storage } from '@ionic/storage';

// Import for SQLite3
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export class TranslationService {

    constructor() {
		console.log("Translation Service Loaded");
	}
	
	load(page, languageFlag) {
		
		console.log("Page: " + page);
		console.log("languageFlag2: " + languageFlag);
		
		if(languageFlag == "en") {
			
			switch(page) {
				
				case "login.html": {
					return {
						firstNameText: "First Name",
						passwordText: "Password",
						createUserText: "Create User",
						loginText: "Login",
						forgotPinText: "Forgot Pin"
					}
				}
				
				case "newUser.html": {
					return {
						firstNameText: "First Name",
						pinText: "Pin",
						pinRestrictionText: "4-6 Character Pin",
						securityQuestionText: "Security Question",
						securityAnswerText: "Security Answer",
						createUserText: "Create User!",
						firstNameFoundText: "That first name is already taken!",
						invalidNameText: "Your first name cannot be blank",
						invalidPinLengthText: "Your pin has to be 4-6 characters",
						invalidSecurityQuestionText: "Your security question cannot be blank!",
						invalidSecurityAnswerText: "Your security answer cannot be blank!"
					}
				}
				
				case "recoverUser.html": {
					return {
						recoverUserText: "Recover User",
						cantFindNameText: "We couldn't find that name!",
						nameOfAccountText: "What is the name of the account you're trying to recover?",
						firstNameText: "First Name",
						findNameText: "Find Name",
						wrongAnswerText: "That isn't the answer!",
						answerToQuestionText: "What is the answer to the following security question?",
						securityAnswerText: "Security Answer",
						submitAnswerText: "Submit Answer",
						invalidPinText: "Your pin needs to be between 4 and 6 characters!",
						enterNewPinText: "Please enter your new pin",
						characterLengthText: "4-6 Character Pin",
						setNewPinText: "Set new pin"
					}
				}
				
				case "dailyEntry.html": {
					return {
						dailyEntryText: "Daily Entry",
						moodText: "Mood",
						dietText: "Diet",
						sleepText: "Sleep",
						stressText: "Stress",
						descriptionText: "Description",
						saveDataText: "Save Data"
						
					}
				}
				
				case "checkinLog.html": {
					
					console.log("HIT");
					return {
						checkinLogText: "Checkin Log",
						moodText: "Mood",
						dietText: "Diet",
						sleepText: "Sleep",
						stressText: "Stress",
						wellnessScoreText: "Score",
						helpMeText: "Help Me!"
					}
				}
				
				case "analyticDashboard.html": {
					return {
						dashboardText: "Dashboard",
						fromDateText: "From Date",
						toDateText: "To Date",
						moodText: "Mood",
						dietText: "Diet",
						sleepText: "Sleep",
						stressText: "Stress",
						generateText: "Generate"
					}
				}
				
				case "checkinLogInfo.html": {
					return {
						checkinLogInfoText: "Check in Log Info",
						dateText: "Date",
						moodText: "Mood",
						dietText: "Diet",
						sleepText: "Sleep",
						stressText: "Stress",
						editText: "Edit",
						deleteText: "Delete"
					}
				}
				
				default: {
					return {}
				}
			}



		
		} else if(languageFlag == "fr") {
			switch(page) {
				
				case "login.html": {
					return {
						firstNameText: "Prénom",
						passwordText: "Mot de passe",
						createUserText: "Créer un utilisateur",
						loginText: "S'identifier",
						forgotPinText: "Pin oublié"
					}
				}
				
				case "newUser.html": {
					return {
						firstNameText: "Prénom",
						pinText: "Épingle",
						pinRestrictionText: "4-6 Pin de caractère",
						securityQuestionText: "Question de sécurité",
						securityAnswerText: "Réponse de sécurité",
						createUserText: "Créer un utilisateur!",
						firstNameFoundText: "Ce prénom est déjà pris!",
						invalidNameText: "Votre prénom ne peut pas être vide",
						invalidPinLengthText: "Votre code doit être entre 4 et 6 caractères",
						invalidSecurityQuestionText: "Votre question de sécurité ne peut pas être vide!",
						invalidSecurityAnswerText: "Votre réponse de sécurité ne peut pas être vide!"
					}
				}
				
				case "recoverUser.html": {
					return {
						recoverUserText: "Récupérer l'utilisateur",
						cantFindNameText: "Nous n'avons pas trouvé ce nom!",
						nameOfAccountText: "Quel est le nom du compte que vous essayez de récupérer?",
						firstNameText: "Prénom",
						findNameText: "Trouver le nom",
						wrongAnswerText: "Ce n'est pas la réponse!",
						answerToQuestionText: "Quelle est la réponse à la question de sécurité suivante?",
						securityAnswerText: "Réponse de sécurité",
						submitAnswerText: "Envoyer une réponse",
						invalidPinText: "Votre code doit avoir entre 4 et 6 caractères!",
						enterNewPinText: "S'il vous plaît entrer votre nouvelle broche",
						characterLengthText: "4-6 Pin de caractère",
						setNewPinText: "Définir une nouvelle broche"
					}
				}
				
				case "dailyEntry.html": {
					return {
						dailyEntryText: "Entrée quotidienne",
						moodText: "Ambiance",
						dietText: "Régime",
						sleepText: "Dormir",
						stressText: "Stress",
						descriptionText: "La description",
						saveDataText: "Enregistrer des données"
					}
				}
				
				case "checkinLog.html": {
					return {
						checkinLogText: "Journal d'enregistrement",
						moodText: "Ambiance",
						dietText: "Régime",
						sleepText: "Dormir",
						stressText: "Stress",
						wellnessScoreText: "Score",
						helpMeText: "Aidez moi!"
					}
				}
				
				case "analyticDashboard.html": {
					return {
						dashboardText: "Tableau de bord",
						fromDateText: "Partir de la date",
						toDateText: "À ce jour",
						moodText: "Ambiance",
						dietText: "Régime",
						sleepText: "Dormir",
						stressText: "Stress",
						generateText: "Produire"
					}
				}
				
				case "checkinLogInfo.html": {
					return {
						checkinLogInfoText: "Archiver les informations du journal",
						dateText: "Rendez-vous amoureux",
						moodText: "Ambiance",
						dietText: "Régime",
						sleepText: "Dormir",
						stressText: "Stress",
						editText: "modifier",
						deleteText: "Effacer"
					}
				}
				
				default: {
					return {}
				}
			}
		}
	
	
	
	
	
	
	
	
	}
}