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

		case "app.component.ts": {
                    return {
                        home: "Home",
                        tools: "Dashboard",
                        resources: "Resources",
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
                        newUserText: "New User",
			firstNameText: "First Name",
			pinText: "Pin",
			pinRestrictionText: "4-50 Character Pin",
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
			invalidPinText: "Your pin needs to be between 4 and 50 characters!",
			enterNewPinText: "Please enter your new pin",
			characterLengthText: "Minimum 4 Character Pin",
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
                       	buttonText1: "Daily Log",
                        buttonText2: "Graph",
//			buttonText3: "Graph"
                    }
		}
                                    
		case "home.html": {
                    return {
                        homeTitleText: "Dashboard",
                        pageToolText1: "Try Our Tools!",
			buttonText1: "Daily Check-In",
			buttonText2: "Wellness Tracker",
			buttonText3: "Tools",
                        buttonText4: "Resources"
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
                        buttonText1Desc: "Working in a correctional environment can be challenging in many ways and it is sometimes not easy to find help so CSC-SCC feels it's important to make resources more accessible to employees.",
                       	buttonText1: "Employee Assistance Services",
                        buttonText2Desc: "Mental health concerns are often identified by immediate family before they become relavant to fellow employees so CSC-SCC feels it's important to make resources avaliable to family memebers of CSC-SCC employees. (Sentence need improvment) ",
                        buttonText2: "Employee Assistance Program",
                        buttonText3Desc: "We care about everyone so here are some helpful resources for everyone. (Sentence need improvment)",
			buttonText3: "Harrassment Prevention Program",
                        buttonText4: "Critical Incident Stress Managment",
                        buttonText5: "Conflict Management",
                        buttonText6: "Employee Protection Protocol",
                    }
		}

                case "employee.html": {
                    return {
                        resourceTitleText: "Employee Resources",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1Desc: "These are programs created to assist employees in achieving workplace happiness and wellbeing.",
                        buttonText1: "Assistance Programs",
                        buttonText2Desc: "After you have become ill or injured, you may need time off to recover. Here is what you need to know about taking leave and compensation.",
			buttonText2: "Leave Programs",
                        buttonText3Desc: "Other helpful contact resources that maybe useful for you.",
                        buttonText3: "Helpful Resources",
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
                        menuTitleText: "Tools",
                        homeTitleText: "Tools",
                        pageToolText1: "Try Our Tools!",
			buttonText1: "Daily Check-In",
			buttonText2: "Wellness Tracker",
			buttonText3: "Tools",
                        buttonText4: "Resources"
                    }
		}
				
                case "empRev1.html": {
                    return {
                        AssProgTitleText: "Assistance Programs",
                        title1: "Employee Assistance Program",
                        paragraph1Text: "The Employee Assistance Program is a confidential program designed to help you and your immediate family members. They can provide referrals and short-term counselling services for personal and work-related problems. Contact the Employee Assistance Program (1-800-268-7708) 24 hours a day, 365 days a year from anywhere in the country.",
                        button1: "Employee Assistance Program",
                        title2: "Positive Space Program",
                        paragraph2Text: "This program is committed to creating a welcoming and inclusive workplace for everyone. That includes lesbian, gay, bisexual, trans, intersex, queer and questioning (LGBTQ+) people.",
                        button2: "Positive Space Program",
                        title3: "Road to Mental Readiness Training",
                        paragraph3Text: "First responders, such a correctional officers, can be exposed to stresses not often experienced by the average person. This training program will help you strengthen your mental resilience in the face of difficult situations.",
                        button3: "Road to Mental Readiness",
                        title4: "Conflict management",
                        paragraph4Text: "The conflict management training program  can help you deal with interpersonal challenges at work. ",
                        button4: "Office of Conflict Management",
                        title5: "Return to Work",
                        paragraph5Text: "This program helps employees who experience an injury or illness, work or non-work related, return to employment as soon as medically possible.",
                        button5: "Return to Work Program",
                        title6: "Duty to Accommodate",
                        paragraph6Text: "This program helps identify and remove barriers to employment (i.e. having accessible facilities, accessible workplace standards, career development opportunities, accommodation for an injury.) ",
                        button6: "Duty to Accommodate Program",
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
                        button7: "Return to Work",    
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
                        title5: "Your insurance company:",
                        paragraph5Text: "If you have questions about what is covered and what isn’t for mental health services, reach out to SunLife Canada. They can help. ",
                        moreHelpfulLinksText: "More Helpful Links",
                        bottomButton: "PUBLIC",
                    }
                }

                case "checkinLogEdit.html": {
                    return {
                        checkinLogInfoText: "Check in Log Info",
                        dateText: "Date",
                        moodText: "Mood",
                        dietText: "Diet",
                        sleepText: "Sleep",
                        stressText: "Stress",
                        editText: "Edit",
                        deleteText: "Delete",
                        saveDataText: "Save"
                    }
                }
				
		default: {
                    return {}
		}
            }		
	} 
        else if(languageFlag == "fr") {
            switch(page) {
				
                case "app.component.ts": { //Translated except Assessment
                   return {
                        home: "Bienvenue",
			tools: "Outils",
			resources: "Ressources",
			updates: "Mise à jour du journal",
                        signout: "Fermeture de session"
                    }
		}
                case "login.html": {
                    return {
                        firstNameText: "Prénom",
			pinText: "NIP",
			createUserText: "Créer un compte d’utilisateur",
			loginText: "Ouverture de session",
			forgotPinText: "J’ai oublié mon NIP",
			firstNameInput: "Entrée du prénom",
			pinInput: "Entrée de broche"
                    }
		}
				
		case "newUser.html": {
                    return {
			firstNameText: "Prénom",
			pinText: "NIP",
			pinRestrictionText: "NIP de 4 à 50 caractères",
			securityQuestionText: "Question de sécurité",
			securityAnswerText: "Réponse à la question de sécurité",
			createUserText: "Créer un compte d’utilisateur",
			firstNameFoundText: "Le prénom est déjà utilisé!",
			invalidNameText: "Le champ Prénom doit être rempli",
			invalidPinLengthText: "Votre NIP doit avoir de 4 à 50 caractères",
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
			invalidPinText: "Votre code doit avoir entre 4 et 50 caractères!",
                        enterNewPinText: "S'il vous plaît entrer votre nouvelle broche",
			characterLengthText: "4-50 NIP de caractère",
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
			wellnessScoreText: "Remarque",
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
                        buttonText1Desc: "Working in a correctional environment can be challenging in many ways and it is sometimes not easy to find help so CSC-SCC feels it's important to make resources more accessible to employees.",
                        buttonText1: "SCC EMPLOYÉ",
                        buttonText2Desc: "Mental health concerns are often identified by immediate family before they become relavant to fellow employees so CSC-SCC feels it's important to make resources avaliable to family memebers of CSC-SCC employees. (Sentence need improvment) ",
    			buttonText2: "SCC FAMILLE D'EMPLOYÉS",
                        buttonText3Desc: "We care about everyone so here are some helpful resources for everyone. (Sentence need improvment)",
			buttonText3: "PUBLIQUE"
                    }
                }
                                
                case "employee.html": {
                    return {
                        resourceTitleText: "Employee Resources",
                        resPageText: "Choisissez la liste de ressources qui s’applique à vous",
                        buttonText1Desc: "These are programs created to assist employees in achieving workplace happiness and wellbeing.",
                        buttonText1: "Programme d’aide aux employés",
                        buttonText2Desc: "After you have become ill or injured, you may need time off to recover. Here is what you need to know about taking leave and compensation.",
			buttonText2: "Leave Programs",
                        buttonText3Desc: "Other helpful contact resources that maybe useful for you.",
                        buttonText3: "Helpful Resources",
                        buttonText10: "Sun Life",
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
                        resourceTitleText: "Publique",
                        resPageText: "Choisissez la liste de ressources qui s’applique à vous",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "CAN Mental Health Association",
                        buttonText3: "Critical Incident Stress Management",
                        buttonText4: "HC Mental Health Services"
                    }
		}
                case "tools.html": {
                    return {
                        menuTitleText: "Outils",
                        homeTitleText: "Outils",
                        pageToolText1: "Essayez nos outils!",
			buttonText1: "Mental Health Continuum",
			buttonText2: "Traqueur de bien-être",
			buttonText3: "Avez-vous une idée d'outil?"
                    }
		}                
                case "empRev1.html": {
                    return {
                        title1: "Programme d’aide aux employés",
			paragraph1Text: "Le Programme d’aide aux employés (PAE) est un programme confidentiel conçu pour vous aider ainsi que les membres de votre famille immédiate. Il vous permet d’obtenir des services d’aiguillage et de counseling à court terme relativement à vos problèmes personnels et professionnels. Communiquez avec le Programme d’aide aux employés (1-800-268-7708) à toute heure du jour ou de la nuit, tous les jours de l’année, partout au pays.",
			button1: "Programme d’aide aux employés",
			title2: "Programme Espace positif",
			paragraph2Text: "Le Programme Espace positif est voué à créer un milieu de travail accueillant et inclusif pour tous, y compris les lesbiennes, gais, bisexuels, transgenres, queer et personnes en questionnement (LGBTQ+).",
			button2: "Programme Espace positif",
			title3: "Formation « En route vers la préparation mentale »",
			paragraph3Text: "Les premiers intervenants comme les agents correctionnels peuvent être exposés à des facteurs de stress que la plupart des gens ne vivront que très rarement. Grâce à ce programme de formation, vous pourrez accroître votre résilience mentale dans des situations difficiles.",
			button3: "En route vers la préparation mentale",
			title4: "Gestion des conflits",
			paragraph4Text: "Le programme de formation en gestion des conflits peut vous aider à gérer des difficultés interpersonnelles au travail.",
			button4: "Bureau de gestion des conflits",
			title5: "Retour au travail",
			paragraph5Text: "Le programme aide les employés ayant une blessure ou une maladie, liée au travail ou non, à retourner au travail dès que leur état de santé le permet.",
			button5: "Programme de retour au travail",
			title6: "Obligation de prendre des mesures d’adaptation",
			paragraph6Text: "Le programme aide à cerner et à supprimer les obstacles à l’emploi (c.-à-d. des installations accessibles, des normes sur les milieux de travail accessibles, des possibilités de perfectionnement professionnel et des mesures d’adaptation en cas de blessure).",
			button6: "Programme relatif à l’obligation de prendre des mesures d’adaptation",
			title7: "Gestion du stress lié aux incidents critiques",
			paragraph7Text: "Le Programme de gestion du stress lié aux incidents critiques peut vous aider à faire face au traumatisme psychologique engendré par les incidents qui se produisent dans les établissements ou dans la collectivité. Il vise à atténuer la réaction associée à un incident.",
			button7: "Gestion du stress à la suite d’un incident critique",
			title8: "Protocole de protection des employés",
			paragraph8Text: "Le programme vous permet de signaler une menace ou une situation d’intimidation immédiatement, au travail ou ailleurs. Signalez la situation à votre gestionnaire ou communiquez avec le Centre national de surveillance après les heures normales de travail.",
			button8: "Protocole de protection des employés",
			title9: "Programme sur la prévention du harcèlement",
			paragraph9Text: "Si vous êtes victime de harcèlement au travail, le Programme sur la prévention du harcèlement peut vous venir en aide. Le harcèlement correspond à tout comportement inopportun et injurieux d’une personne envers une autre. Communiquez avec le Programme sur la prévention du harcèlement.",
			button9: "Programme d’aide aux employés",
			title10: "Santé et sécurité au travail",
			paragraph10Text: "Le programme favorise un milieu de travail sain et sécuritaire pour les employés. Il contribue à prévenir les blessures et les maladies professionnelles ou à en réduire le nombre grâce à des inspections du milieu de travail, à des enquêtes sur les blessures professionnelles et à la formulation de recommandations à la direction du SCC quant aux changements de politiques et de pratiques qui s’imposent.",
			button10: "Santé et sécurité au travail",
			moreHelpfulLinksText: "Autres liens utiles",
			bottomButton: "GRAND PUBLIC",
                    }
					
		}
		
		case "empRev2.html": {
                    return {
                        title1: "Lignes directrices sur les congés du SCC",
			paragraph1Text: "Dans ce document se trouvent tous les renseignements dont vous avez besoin au sujet de la prise de congés.",
			button1: "Lignes directrices sur les congés du SCC",
			title2: "Indemnisation des accidentés du travail",
			paragraph2Text: "Si vous vous blessez ou tombez malade au travail, vous devez présenter une demande d’indemnisation auprès de la commission des accidents du travail. Communiquez avec la commission des accidents du travail de votre région pour connaître vos droits et responsabilités à la suite de votre blessure.",
			button2: "Communiquer avec la commission des accidents du travail",
			title3: "Accident de travail",
			paragraph3Text: "Dispositions sur les congés pour accident du travail et conventions collectives. Dans pratiquement tous les cas, les employés du gouvernement du Canada qui doivent prendre congé en raison d’une blessure ou d’une maladie professionnelle ont droit à un congé pour accident du travail avec plein salaire. C’est votre employeur qui détermine la durée du congé. Pour de plus amples renseignements, veuillez consulter votre convention collective.",
			button3: "Lien à déterminer",
			title4: "Assurance-invalidité",
			paragraph4Text: "Si vous devez vous absenter du travail pour une période prolongée, vous pourriez avoir droit, à titre d’employé, à des prestations équivalant à 70 % de votre salaire annuel. Communiquez avec le Centre de services des RH pour parler à un conseiller en rémunération qui pourra vous accompagner dans ce processus.",
			title5: "Retraite pour des raisons médicales",
			paragraph5Text: "Une retraite pour des raisons médicales est accordée aux employés ayant une invalidité confirmée par Santé Canada qui les empêche de faire quelque travail que ce soit. Communiquez avec le Centre de services en RH pour parler à un conseiller en rémunération qui pourra vous accompagner dans ce processus.",
			title6: "Pension/pension de retraite",
			paragraph6Text: "Si vous êtes absent du travail pendant une certaine période, vous pourriez découvrir à votre retour au travail que vous devez verser une cotisation à votre régime de retraite. Communiquez avec le Centre de services en RH pour vous éviter d’avoir des dépenses imprévues au moment de votre retour au travail.",
			button6: "Protocole de protection des employés",
			title7: "Retour au travail",
			paragraph7Text: "Le programme aide les employés ayant une blessure ou une maladie, liée au travail ou non, à retourner au travail dès que leur état de santé le permet. Communiquez avec le Programme de retour au travail.",
			moreHelpfulLinksText: "Autres liens utiles",
			bottomButton: "GRAND PUBLIC",
                    }
					
		}
			
		case "empRev3.html": {
                    return {
			maintitle: "Autres ressources utiles auxquelles vous avez accès.",
                        mainParagraph: "Il est important de maintenir une communication productive et respectueuse avec votre gestionnaire ou superviseur. Tenez un registre détaillé de vos conversations verbales et écrites pour vos dossiers.",
			title1: "Votre médecin de famille :",
			paragraph1Text: "Pour votre processus de rétablissement, vous devez absolument obtenir l’assistance de votre médecin de famille. Si votre médecin vous aiguille vers des services d’aide psychologique, sachez que les frais connexes peuvent être remboursés, jusqu’à concurrence de 2 000 $ par année, par le Régime de soins de santé de la fonction publique. Prenez rendez-vous dès maintenant.",
			title2: "Famille, amis et collègues :",
			paragraph2Text: "La communication avec les personnes qui vous sont les plus chères et avec qui vous avez les liens les plus étroits est essentielle. Même si vous n’en avez pas envie, parlez leur et dotez-vous d’un réseau de soutien solide. Votre rétablissement en sera ainsi grandement facilité.",
			title3: "Votre conseiller local :",
			paragraph3Text: "Ce pourrait être une bonne idée de rencontrer un conseiller local si vous sentez le besoin de parler. Il pourra vous offrir du soutien et vous guider pendant cette épreuve.",
			title4: "Votre conseiller financier :",
			paragraph4Text: "Il pourrait y avoir des répercussions financières à votre incapacité de travailler pendant un certain temps. Faites appel à votre conseiller financier pour obtenir des conseils et une orientation.",
			title5: "Votre compagnie d’assurance :",
			paragraph5Text: "Pour toute question au sujet des services de santé mentale couverts et non couverts, communiquez avec Sun Life Canada. Son personnel saura vous aider."
                    }
		}
                
                case "checkinLogEdit": {
                    return {
                            checkinLogInfoText: "Information relative au journal des inscriptions quotidiennes",
                            dateText: "Date",
                            moodText: "Humeur",
                            dietText: "Régime",
                            sleepText: "Sommeil",
                            stressText: "Stress",
                            editText: "modifier",
                            deleteText: "Effacer",
                            saveDataText: 'Sauvegarder'
                    }
			
		}                   
		default: {
                    return {}
		}
            }
	}	
    }
}