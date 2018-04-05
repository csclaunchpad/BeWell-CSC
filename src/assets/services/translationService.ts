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

                case "component.ts": {
                    return {
                        home: "Home",
			dailyentry: "Daily Entry",
			checkinglog: "Checkin Log",
			dashboard: "Dashboard",
			resources: "Resources",
			assessment: "Assessment",
			updates: "Updates",
                        signout: "SignOut"
                    }
		}				
		case "login.html": {
                    return {
                        firstNameText: "First Name",
			pinText: "Pin",
			createUserText: "Create User",
			loginText: "Login",
			forgotPinText: "Forgot Pin",
			firstNameInput: "First Name Input",
			pinInput: "Pin Input"
                    }
		}
				
		case "newUser.html": {
                    return {
			firstNameText: "First Name",
			pinText: "Pin",
			pinRestrictionText: "4-20 Character Pin",
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

		case "wellnesstracker.html": {
                    return {
			resourceTitleText: "Wellness Tracker",
                        resPageText: "Choose the resource list that applies to you",
                       	buttonText1: "Daily Entry",
                        buttonText2: "Checkin Log",
			buttonText3: "Dashboard"
                    }
		}
                                    
		case "home.html": {
                    return {
                        homeTitleText: "Welcome",
                        PageTitleText: "Welcome CSC Family!!",
			buttonText1: "Help us improve mental health?",
			buttonText2: "Send us an Idea.",
			buttonText3: "placeholder"
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
			generateText: "Generate",
			chartText: "Chart"
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

		case "resources.html": {
                    return {
			resourceTitleText: "Resources",
                        resPageText: "Choose the resource list that applies to you",
                       	buttonText1: "CSC EMPLOYEE",
                        buttonText2: "CSC EMPLOYEE FAMILY",
			buttonText3: "PUBLIC"
                    }
		}

                case "employee.html": {
                    return {
                        resourceTitleText: "Employee Resources",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
			buttonText2: "Employee Assistance Program",
			buttonText3: "CAN Mental Health Association",
                        buttonText4: "Critical Incident Stress Management",
                        buttonText5: "Road to Mental Readiness",
                        buttonText6: "Return to Work Program",
                        buttonText7: "Occupational Health and Safety",
                        buttonText8: "Harassment Prevention Program",
                        buttonText9: "Harassment Hot line",
                        buttonText10: "Sun Life",
                        sunlink: "https://www.sunlife.ca/ca/Insurance/Life+insurance?vgnLocale=en_CA"
                    }
		}

                case "employeeFamily.html": {
                    return {
                        resourceTitleText: "Employee Family",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "Employee Assitance Program",
                        buttonText3: "Mental Health Service",
                        buttonText4: "CSC Family Support Number"
                    }
		}
                                
                case "public.html": {
                    return {
                        resourceTitleText: "Public",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "CAN Mental Health Association",
                        buttonText3: "Critical Incident Stress Management",
                        buttonText4: "HC Mental Health Services"
                    }
		}   
                 
                case "assessment.html":{
                    return {
                        resourceTitleText: "Road to Mental Readiness",
                        resourcePageText: "Assess Yourself",
                        opStressInurySentence: "",
                        buttonText1: "Begin Assessment",
                        buttonText2: "Begin Assessment",
                        buttonText3: "Begin Assessment",
                    }
                }                                                                               				
                case "tools.html": {
                    return {
                        homeTitleText: "Tools",
                        pageToolText1: "Try Our Tools!",
						buttonText1: "Mental Health Continuum",
						buttonText2: "Wellness Tracker",
						buttonText3: "Do you have a tool idea?"
                    }
				}
				
				case "empRev1.html": {
					return {
						title1: "Employee Assistance Program",
						paragraph1Text: "The Employee Assistance Program is a confidential program designed to help you and your immediate family members. They can provide referrals and short-term counselling services for personal and work-related problems. Contact the Employee Assistance Program (1-800-268-7708) 24 hours a day, 365 days a year from anywhere in the country.",
						button1: "Employee Assistance Program",
						title2: "Positive Space Program",
						paragraph2Text: "This program is committed to creating a welcoming and inclusive workplace for everyone. That includes lesbian, gay, bisexual, trans, intersex, queer and questioning (LGBTQ+) people.",
						button2: "Email Positive Space Program",
						title3: "Road to Mental Readiness Training",
						paragraph3Text: "First responders, such a correctional officers, can be exposed to stresses not often experienced by the average person. This training program will help you strengthen your mental resilience in the face of difficult situations.",
						button3: "Road to Mental Readiness",
						title4: "Conflict management",
						paragraph4Text: "The conflict management training program  can help you deal with interpersonal challenges at work. ",
						button4: "Email Office of Conflict Management",
						title5: "Return to Work",
						paragraph5Text: "This program helps employees who experience an injury or illness, work or non-work related, return to employment as soon as medically possible.",
						button5: "Email Return to Work Program",
						title6: "Duty to Accommodate",
						paragraph6Text: "This program helps identify and remove barriers to employment (i.e. having accessible facilities, accessible workplace standards, career development opportunities, accommodation for an injury.) ",
						button6: "Email Duty to Accommodate Program",
						title7: "Critical Incident Stress Management",
						paragraph7Text: "This program that can help you cope with psychological trauma from incidents that happen in an institution or the community. It aims to lessen the response associated with an event.",
						button7: "Critical Incident Stress Management",
						title8: "Employee Protection Protocol",
						paragraph8Text: "This program lets you report threats or intimidation immediately, whether it’s at work or not. Report the situation to your manager or contact the National Monitoring Center to report after hours.",
						button8: "Employee Protection Protocol",
						title9: "Harassment Prevention Program",
						paragraph9Text: "If you are experiencing harassment at work, the Harassment Prevention Program can help. Harassment is any improper conduct by an individual that is offensive to another person. Contact the Harassment Prevention Program.",
						button9: "Employee Assistance Program",
						title10: "Occupational Health and Safety",
						paragraph10Text: "This program promotes a safe and healthy workplace for employees. It helps prevent or reduce occupational injuries and illnesses by inspecting the workplace, investigating workplace injuries, and recommending necessary changes in policy and practice to CSC management.",
						button10: "Occupational Health and Safety",
						moreHelpfulLinksText: "More Helpful Links",
						bottomButton: "PUBLIC",
					}
					
				}
				
				case "empRev2.html": {
					return {
                                                AssProgTitleText: "Leave Programs",
						title1: "CSC’s Leave Guidelines",
						paragraph1Text: "This document includes all of the information you need to know about taking leave from work.",
						button1: "CSC’s Leave guidelines",
						title2: "Workers’ Compensation",
						paragraph2Text: "If you become ill or injured at work, you need to contact Workers’ Compensation to file your claim. Contact the Workers’ Compensation board in your area to learn about your rights and responsibilities following your injury.",
						button2: "Contact Workers",
						title3: "Injury on Duty",
						paragraph3Text: "Injury on duty leave provisions and collective agreements In virtually all cases, Government of Canada employees who must take leave due to a workplace illness or injury are entitled to injury on duty leave with full pay. The length of time is determined by your employer. Please consult your collective agreement for more information.",
						button3: "Link TBD",
						title4: "Disability Insurance",
						paragraph4Text: "If you are unable to work for a lengthy period of time, as an employee you may be eligible for coverage up to 70% of your annual salary. Contact the HR Service Center to speak with a compensation advisor who can walk you through the process. ",
						title5: "Medical retirement",
						paragraph5Text: "A medical retirement is granted to employees who are confirmed by Health Canada to have a disability that prevents you from doing any work. Contact the HR Service Center to speak with a compensation advisor who can walk you through the process.",
						title6: "Pension/Superannuation",
						paragraph6Text: "If you are away from work for a certain length of time, you could return to work and find that you owe money to your pension plan. Contact the HR Service Center to avoid unexpected expenses upon your return.",
						button6: "Employee Protection Protocol",
						title7: "Return to Work",
						paragraph7Text: "This program helps employees who experience an injury or illness, work or non-work related, return to employment as soon as medically possible. Contact the Return to Work Program.",
						moreHelpfulLinksText: "More Helpful Links",
						bottomButton: "PUBLIC",
					}
					
				}
				
				case "empRev3.html": {
					return {
						maintitle: "Other helpful resources that may be available to you.",
						AssProgTitleText: "Leave Programs",
						mainParagraph: "Maintaining productive and respectful communication with your manager or supervisor about your experience is important. Keep a detailed record of your paper and in-person conversations for your files. ",
						title1: "Your family doctor:",
						paragraph1Text: "Seeking assistance from your family doctor is crucial to your recovery process. With a doctor’s referral, your Public Service Health Care Plan will cover you up to $2000 a year for psychological services. Book an appointment now. ",
						title2: "Family, friends, and colleagues:",
						paragraph2Text: "Communication with those you care for most and are closest with is key. Even though you may not feel like it, reach out and create a healthy support network for yourself. Your recovery will benefit greatly if you do.",
						title3: "Your local counsellor:",
						paragraph3Text: "Meeting with a local counsellor may be a good idea if you need to talk. They will be able to support you and guide you as you process your experience. ",
						title4: "Your financial advisor:",
						paragraph4Text: "There may be financial implications if you cannot work for some time. Reach out to your financial advisor for advice and guidance.",
						paragraph5Text: "If you have questions about what is covered and what isn’t for mental health services, reach out to SunLife Canada. They can help. ",
						bottomButton: "PUBLIC"
					}
				}
				
		default: {
                    return {}
		}
            }		
	} 
        else if(languageFlag == "fr") {
            switch(page) {
				
                case "component.ts": { //Transalted except Assessment
                    return {
                        home: "Bienvenue",
			dailyentry: "Inscription Quotidienne",
			checkinglog: "Journal des inscriptions quotidiennes",
			dashboard: "Tableau de bord",
			resources: "Ressources",
			assessment: "Évaluation",
			updates: "Mise à jour du journal",
                        signout: "Fermeture de session"
                    }
		}
                case "login.html": {
                    return {
                        firstNameText: "Prénom",
			pinText: "épingle",
			createUserText: "Créer un utilisateur",
			loginText: "S'identifier",
			forgotPinText: "Pin oublié",
			firstNameInput: "Entrée du prénom",
			pinInput: "Entrée de broche"
                    }
		}
				
		case "newUser.html": {
                    return {
			firstNameText: "Prénom",
			pinText: "NIP",
			pinRestrictionText: "NIP de 4 à 20 caractères",
			securityQuestionText: "Question de sécurité",
			securityAnswerText: "Réponse à la question de sécurité",
			createUserText: "Créer un compte d’utilisateur",
			firstNameFoundText: "Le prénom est déjà utilisé!",
			invalidNameText: "Le champ Prénom doit être rempli",
			invalidPinLengthText: "Votre NIP doit avoir de 4 à 20 caractères",
			invalidSecurityQuestionText: "Le champ Question de sécurité doit être rempli",
			invalidSecurityAnswerText: "Le champ réponse à la question de sécurité doit être rempli"
                    }
                }
				
		case "recoverUser.html": {
                    return {
                        recoverUserText: "Récupérer un compte d’utilisateur",
			cantFindNameText: "Le compte n’existe pas!",
			nameOfAccountText: "Quel est le nom du compte que vous tentez de récupérer? ",
			firstNameText: "Prénom",
			findNameText: "Trouver le nom",
			wrongAnswerText: "Ce n'est pas la réponse!",
			answerToQuestionText: "Quelle est la réponse à la question de sécurité suivante?",
                        securityAnswerText: "Réponse à la question de sécurité",
			submitAnswerText: "Envoyer une réponse",
			invalidPinText: "Votre code doit avoir entre 4 et 6 caractères!",
                        enterNewPinText: "S'il vous plaît entrer votre nouvelle broche",
			characterLengthText: "4-20 NIP de caractère",
			setNewPinText: "Définir une nouvelle broche"
                   }
                }

                case "home.html": {
                    return {
                        homeTitleText: "Bienvenue",
			buttonText1: "Mental Health Continuum",
			buttonText2: "Avez-vous une idée d'outil?",
			buttonText3: "Avez-vous une idée d'outil?"
                    }
		}

                case "wellnesstracker.html": { //all trasnlated but Welness tracker
                    return {
			resourceTitleText: "Wellness Tracker",
                        resPageText: "Choisissez la liste de ressources qui s’applique à vous",
                       	buttonText1: "Inscription quotidienne",
                        buttonText2: "Journal des inscriptions quotidiennes",
			buttonText3: "Tableau de Bord Analytique"
                    }
		}
                                				
		case "dailyEntry.html": {
                    return {
                        dailyEntryText: "Inscription quotidienne",
			moodText: "Humeur",
			dietText: "Régime",
			sleepText: "Sommeil",
			stressText: "Stress",
			descriptionText: "Description",
			saveDataText: "Sauvegarder les données"
                    }
		}
				
		case "checkinLog.html": {
                    return {
			checkinLogText: "Journal des inscriptions quotidiennes",
			moodText: "Humeur",
			dietText: "Régime",
			sleepText: "Sommeil",
			stressText: "Stress",
			wellnessScoreText: "Note",
			helpMeText: "Aidez moi!"
                    }
		}
				
		case "analyticDashboard.html": {
                    return {
			dashboardText: "Tableau de bord",
			fromDateText: "Du date",
			toDateText: "Au date",
			moodText: "Humeur",
			dietText: "Régime",
			sleepText: "Sommeil",
			stressText: "Stress",
			generateText: "Produire",
			chartText: "Graphique"
                    }
		}
				
		case "checkinLogInfo.html": {
                    return {
			checkinLogInfoText: "Information relative au journal des inscriptions quotidiennes",
			dateText: "Date",
			moodText: "Humeur",
			dietText: "Régime",
			sleepText: "Sommeil",
			stressText: "Stress",
			editText: "modifier",
			deleteText: "Effacer"
                    }
		}
				
		case "resources.html": {
                    return {
			resourceTitleText: "Ressources",
                        resPageText: "Choisissez la liste de ressources qui vous concerne",
                        buttonText1: "SCC EMPLOYÉ",
			buttonText2: "SCC FAMILLE D'EMPLOYÉS",
			buttonText3: "PUBLIQUE"
                    }
                }
                                
                case "employee.html": {
                    return {
                        resourceTitleText: "EMPLOYÉ(E) DU SCC",
                        resPageText: "Choisissez la liste de ressources qui s’applique à vous",
                        buttonText1: "Employee Assistance Program",
			buttonText2: "Harassment Prevention Program",
			buttonText3: "National Attendance Management Program",
                        buttonText4: "Critical Incident Stress Management",
                       buttonText5: "Occupational Health and Safety",
                        buttonText6: "Return to Work Program",
                        buttonText7: "CSC Contacts by Email",
                        buttonText8: "Harassment Hot line",
                        buttonText9: "Sun Life",
                        sunlink: "https://www.sunlife.ca/ca/Insurance/Life+insurance?vgnLocale=fr_CA"
                    }
		}
                case "employeeFamily.html": {
                    return {
                       resourceTitleText: "FAMILLE D’UN OU D’UNE EMPLOYÉ(E) DU SCC",
                        resPageText: "Choisissez la liste de ressources qui s’applique à vous",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "Employee Assitance Program",
                        buttonText3: "Mental Health Service",
                        buttonText4: "CSC Family Support Number"
                    }
		}                                              
                case "public.html": {
                    return {
                        resourceTitleText: "Public",
                        resPageText: "Choisissez la liste de ressources qui s’applique à vous",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "CAN Mental Health Association",
                        buttonText3: "Critical Incident Stress Management",
                        buttonText4: "HC Mental Health Services"
                    }
		}
                case "tools.html": {
                    return {
                        homeTitleText: "Outils",
			buttonText1: "Mental Health Continuum",
			buttonText2: "Wellness Tracker",
			buttonText3: "Do you have a tool idea?"
                    }
		}                
                case "empRev1.html": {
			return {
                                title1: "Employee Assistance Program",
				paragraph1Text: "The Employee Assistance Program is a confidential program designed to help you and your immediate family members. They can provide referrals and short-term counselling services for personal and work-related problems. Contact the Employee Assistance Program (1-800-268-7708) 24 hours a day, 365 days a year from anywhere in the country.",
				button1: "Employee Assistance Program",
				title2: "Positive Space Program",
				paragraph2Text: "This program is committed to creating a welcoming and inclusive workplace for everyone. That includes lesbian, gay, bisexual, trans, intersex, queer and questioning (LGBTQ+) people.",
				button2: "Email Positive Space Program",
				title3: "Road to Mental Readiness Training",
				paragraph3Text: "First responders, such a correctional officers, can be exposed to stresses not often experienced by the average person. This training program will help you strengthen your mental resilience in the face of difficult situations.",
				button3: "Road to Mental Readiness",
				title4: "Conflict management",
				paragraph4Text: "The conflict management training program  can help you deal with interpersonal challenges at work. ",
				button4: "Email Office of Conflict Management",
				title5: "Return to Work",
				paragraph5Text: "This program helps employees who experience an injury or illness, work or non-work related, return to employment as soon as medically possible.",
				button5: "Email Return to Work Program",
				title6: "Duty to Accommodate",
				paragraph6Text: "This program helps identify and remove barriers to employment (i.e. having accessible facilities, accessible workplace standards, career development opportunities, accommodation for an injury.) ",
				button6: "Email Duty to Accommodate Program",
				title7: "Critical Incident Stress Management",
				paragraph7Text: "This program that can help you cope with psychological trauma from incidents that happen in an institution or the community. It aims to lessen the response associated with an event.",
				button7: "Critical Incident Stress Management",
				title8: "Employee Protection Protocol",
				paragraph8Text: "This program lets you report threats or intimidation immediately, whether it’s at work or not. Report the situation to your manager or contact the National Monitoring Center to report after hours.",
				button8: "Employee Protection Protocol",
				title9: "Harassment Prevention Program",
				paragraph9Text: "If you are experiencing harassment at work, the Harassment Prevention Program can help. Harassment is any improper conduct by an individual that is offensive to another person. Contact the Harassment Prevention Program.",
				button9: "Employee Assistance Program",
				title10: "Occupational Health and Safety",
				paragraph10Text: "This program promotes a safe and healthy workplace for employees. It helps prevent or reduce occupational injuries and illnesses by inspecting the workplace, investigating workplace injuries, and recommending necessary changes in policy and practice to CSC management.",
				button10: "Occupational Health and Safety",
				moreHelpfulLinksText: "More Helpful Links",
				bottomButton: "PUBLIC",
			}
					
		}
		
		case "empRev2.html": {
			return {
				title1: "CSC’s Leave Guidelines",
				paragraph1Text: "This document includes all of the information you need to know about taking leave from work.",
				button1: "CSC’s Leave guidelines",
				title2: "Workers’ Compensation",
				paragraph2Text: "If you become ill or injured at work, you need to contact Workers’ Compensation to file your claim. Contact the Workers’ Compensation board in your area to learn about your rights and responsibilities following your injury.",
				button2: "Contact Workers",
				title3: "Injury on Duty",
				paragraph3Text: "Injury on duty leave provisions and collective agreements In virtually all cases, Government of Canada employees who must take leave due to a workplace illness or injury are entitled to injury on duty leave with full pay. The length of time is determined by your employer. Please consult your collective agreement for more information.",
				button3: "Link TBD",
				title4: "Disability Insurance",
				paragraph4Text: "If you are unable to work for a lengthy period of time, as an employee you may be eligible for coverage up to 70% of your annual salary. Contact the HR Service Center to speak with a compensation advisor who can walk you through the process. ",
				title5: "Medical retirement",
				paragraph5Text: "A medical retirement is granted to employees who are confirmed by Health Canada to have a disability that prevents you from doing any work. Contact the HR Service Center to speak with a compensation advisor who can walk you through the process.",
				title6: "Pension/Superannuation",
				paragraph6Text: "If you are away from work for a certain length of time, you could return to work and find that you owe money to your pension plan. Contact the HR Service Center to avoid unexpected expenses upon your return.",
				button6: "Employee Protection Protocol",
				title7: "Return to Work",
				paragraph7Text: "This program helps employees who experience an injury or illness, work or non-work related, return to employment as soon as medically possible. Contact the Return to Work Program.",
				moreHelpfulLinksText: "More Helpful Links",
				bottomButton: "PUBLIC",
			}
					
		}
			
		case "empRev3.html": {
			return {
				maintitle: "Other helpful resources that may be available to you.",
				mainParagraph: "Maintaining productive and respectful communication with your manager or supervisor about your experience is important. Keep a detailed record of your paper and in-person conversations for your files. ",
				title1: "Your family doctor:",
				paragraph1Text: "Seeking assistance from your family doctor is crucial to your recovery process. With a doctor’s referral, your Public Service Health Care Plan will cover you up to $2000 a year for psychological services. Book an appointment now. ",
				title2: "Family, friends, and colleagues:",
				paragraph2Text: "Communication with those you care for most and are closest with is key. Even though you may not feel like it, reach out and create a healthy support network for yourself. Your recovery will benefit greatly if you do.",
				title3: "Your local counsellor:",
				paragraph3Text: "Meeting with a local counsellor may be a good idea if you need to talk. They will be able to support you and guide you as you process your experience. ",
				title4: "Your financial advisor:",
				paragraph4Text: "There may be financial implications if you cannot work for some time. Reach out to your financial advisor for advice and guidance.",
				title5: "Your insurance company:",
				paragraph5Text: "If you have questions about what is covered and what isn’t for mental health services, reach out to SunLife Canada. They can help. "
			}
		}                       
		default: {
                    return {}
		}
            }
	}	
    }
}