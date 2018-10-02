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
						settings: "Settings",
						language: "EN/FR",
						help: "Help",
						logout: "Log out"
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
					}
				}
											
				case "home.html": {
					return {
						homeTitleText: "Dashboard",
						pageToolText1: "Try Our Tools!",
						buttonText1: "Daily Check-In",
						buttonText2: "Wellness Tracker",
						buttonText3: "Tools (Coming soon!)",
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
						dateText: "Date",
						timeText: "Time",
						descriptionText: "Description",
						saveDataText: "Save Data"	
					}
				}
								
				case "checkinLog.html": {
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
						generateText: "Generate Graph",
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
						buttonText1: "Employee Assistance Services",
						buttonText1AriaLabel: "Employee Assistance Services button",
						buttonText2: "Need counselling?",
						buttonText2AriaLabel: "Need counselling button",
						buttonText3: "Are you being harassed?",
						buttonText3AriaLabel: "Are you being harassed button",
						buttonText4: "Involved in a traumatic event?",
						buttonText4AriaLabel: "Involved in a traumatic event button",
						buttonText5: "Dealing with conflict?",
						buttonText5AriaLabel: "Dealing with conflict button",
						buttonText6: "Are you being threatened?",
						buttonText6AriaLabel: "Are you being threatened button",
						buttonText7: "Returning to work?",
						buttonText7AriaLabel: "Returning to work button",
						buttonText8: "Issues with attendance?",
						buttonText8AriaLabel: "Issues with attendance button",
						buttonText9: "Require accommodation?",
						buttonText9AriaLabel: "Require accommodation button"
					}
				}
						
				case "resinfo.html": {
					return {
						resTitle: "Test Resources",
						resParagraph1Text: "Stuff here",
					  
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
						
				case "EmployeeProtectionProtocol": {
					return {
						title: "Are you being threatened?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The Employee Protection Protocol (EPP) can help keep you and your family safe from threats, criminal harassment and intimidation. It is not uncommon to encounter difficult behaviour when dealing with offenders. You may experience different degrees of such bahviour depending on what you do and where you work. All threats are not equal. If you feel the situation is not 'normal' you should report it.",
						mainParagraphAriaLabel: "Employee Protection Protocol (EPP) Summary",
						bulletPointHeader: "What to do when threatened:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Take immediate action if you perceive that you are in imminent or serious danger",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Inside the workplace you should report the situation to your manager right away. If something happens outside of normal working hours, follow established procedures for your site to start the EPP process. For example:",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "At the institutions, contact the designated duty officer for your facility",
						bulletPoint2SubPoint1AriaLabel: "Bullet two sub point one",
						bulletPoint2SubPoint2: "In the community, contact the National Monitoring Centre: 1-877-860-0617",
						
						bulletPoint2SubPoint2AriaLabel: "Bullet two sub point two",
						bulletPoint2SubPoint3: "At NHQ, contact the NHQ security number: 613-992-1486",
						bulletPoint2SubPoint3AriaLabel: "Bullet two sub point three",
						
						bulletPoint3: "Outside the workplace you should distance yourself from the threat. Contact the police immediately. Then report the situation to your manager as soon as possible.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "",
						bulletPoint4AriaLabel: "Four Bullet Point",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact ???",
						imageName: "DSC_0848.jpg"
					}
				}
						
				case "EmployeeAssistanceServices": {
					return {
						title: "Employee Assistance Services",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Employee Assistance Services (EAS) is the national provider of Employee Assistance Program (EAP) services for the Correctional Service of Canada. They maintain the highest level of professionalism and confidentiality.",
						mainParagraphAriaLabel: "Employee Assistance Services (EAS) Summary",
						bulletPointHeader: "You can reach the crisis/rreferral line at 1-800-268-7708 or 1-800-567-5803 (TTY). It:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "is a confidential mental health service",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "is available 24 hours a day and 365 days a year",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "offers bilingual service (French & English)",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "is available at no cost for employees, their spouse and dependents",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "provides immediatge telephone crisis support and counselling if needed",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "coordinates refferals to a counsellor in your area",
						bulletPoint6AriaLabel: "Sixième puce",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact Employee Assistance Program",
						imageName: "36431210_l.jpg",
					}
				}
						
				case "CriticalIncidentStressManagement": {
					return {
						title: "Involved in a traumatic event?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The Critical Incident Stress Management (CISM) program is a crisis intervention system that is designed to support CSC employees and their immediate family members (including a spouse or children who are still living at home). This service is available following critical incidents, which are traumatic events outside the usual range of human experience, such as events involving extreme violence against staff or offenders, severe injury or death, or the witnessing of such events.",
						mainParagraphAriaLabel: "Critical Incident Stress Management (CISM) Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "CISM is offered by trained CSC employees, including mental health professionals.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "It is diverse in it's interventions, including components such aas education, on-scene support, and debriefing or defusing.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "CISM is voluntary, as you are not obligated to use the program.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "It is confidential, peers do not provide details about who uses the program.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "Sixième puce",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "Septième puce",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact GEN-EAP-CISM",
						imageName: "39280824_l.jpg",
					}
				}
						
				case "DutyToAccomodate": {
					return {
						title: "Require accommodation?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The Duty to Accommodte (DTA) Program ensures that CSC is meeting its legal obligation regarding workplace accommodation as defined by Canadian legislation. The program strives to create a barrier free workplace; prevent discrimination based on a prohibted ground; and to ensure that employees' specific needs are accommodated by offerring equal opportunites for all.",
						mainParagraphAriaLabel: "Duty to Accommodate Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "Duty to Accommodate provides advice and guidance to managers/supervisors and human resource practitioners on the DTA program, the accommodation process, case specific accommodation matters as well as related legislation and policies.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Informs and educates all parties of their role and responsbilities in the accommodation process.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Assists managers/supervisors with preparing accommodtion related documents.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Assists with application and interpretation of policy and emerging case law.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Provides training./awareness sessions to relevant partners and stakeholders.",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact GEN-NAT-DTA-OPDMA",
						imageName: "43276279_l.jpg",
					}
				}
						
				case "EmployeeAssistanceProgram": {
					return {
						title: "Need counselling?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The Employee Assistance Program (EAP) is a voluntary program which provides support to employees and raises awareness about wellbeing.",
						mainParagraphAriaLabel: "Employee Assistance Program Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "EAP referral agents are trained CSC employees at each worksite who volunteer to provide confidential support to their colleagues who are experiencing work-related or personal problems affecting their productivity or well-being.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "They can help you or your immediate family members connect to short-term counselling support services through CSC's service provider, Employee Assistance Services (EAS)",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "",
						bulletPoint4AriaLabel: "",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "Short-Term Counselling Services:",
						secondListTitleAriaLabel: "Short Term Counselling Services Title",
						secondListBulletPoint1: "Employee Assistance Services (EAS) provides confindential, immediate telephone crisis support and counselling, plus refferals to counsellors in your area for in-person sessions.",
						secondListBulletPoint1AriaLabel: "Second list, bullet point one",
						secondListBulletPoint2: "Up to 8 sessions is available at no cost to you, or your immediaate family members. Note: if your presenting issue requires long-term intervention, you can access services covered by your Public Service Health Care Plan.",
						secondListBulletPoint2AriaLabel: "Second list, bullet point two",
						secondListBulletPoint3: "Contact a CSC EAP Referral Agent for mroe information, or you may contact the service directly, at any time, from any location.",
						secondListBulletPoint3AriaLabel: "Second list, bullet point three",
						secondListFooter: "Call EAS now: 1-800-268-7708",
						secondListFooterAriaLabel: "Call EAS number",
						secondListFooterParagraph: "TDD service is available at 1-800-567-5803 Monday to Friday 7:30 am - 11:00 pm EST. Relay Service (RS) is available outside these hours.",
						secondListFooterParagraphAriaLabel: "TDD service description",
						contactName: "Contact Employee Assistance Program",
						imageName: "30051199_l.jpg",
					}
				}
						
				case "HarassmentPreventionProgram": {
					return {
						title: "Are you being harassed?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The Harassment Prevention Program provides information and advice to employees and managers/supervisors in cases of alleged harassment.",
						mainParagraphAriaLabel: "Harassment Prevention Program Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "The Harassment Prevention Program can help you learn about informal and formal ways to deal with harassment.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "It offers training in harassment prevention.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Provides information on the policy, guidelines and the formaal complaint process.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "It advises appropriate designated official in a formal process.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Liaises with complainant/respondent",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact GEN-NAT Harrassment Prvention Harcèlement",
						imageName: "33867343_l.jpg",
					}
				}
						
				case "NationalAttendanceManagementProgram": {
					return {
						title: "Issues with attendance?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The National Attendance Management Program (NAMP) is designed to ensure consistent and fair management of employee attendance. It aims to improve attendance by managing each case individually when issues arise.",
						mainParagraphAriaLabel: "National Attendance Management Program (NAMP) Summary",
						bulletPointHeader: "The National Attendance Management Program can:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "NAMP helps promote and improve attendance through awareness, intervention and individual case management.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "It ensures the consistent application of the NAMP and evaluate the program.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Provides training to NAMP coordinators and management.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Provides advice and guidance to all staff, including management and NAMP coordinators.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Reviews the threshold for each occupational group in collaboration with Human Resources (HR) Business Processes, Systems and Reporting Directorate.",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact GEN-NAT-NAMP-PNGA",
						imageName: "47382242_l.jpg",
					}
				}
						
				case "ConflictManagement": {
					return {
						title: "Dealing with conflict?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "",
						mainParagraphAriaLabel: "",
						bulletPointHeader: "The Office of Conflict Management (OCM) provides confidential and impartial conflict management services.",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "OCM can help you learn about informal conflict resolution options such as facilitated discussions, conflict coaching and mediation.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Provides customized group interventions.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Provides presentations, workshops, awareness sessions and training on effective communication and conflict management.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Provides information on how to prevent, manage, and resolve conflicts in the workplace",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact OCM: GEN-NHQ OCM-BGC",
						imageName: "52115462_l.jpg",
					}
				}
						
				case "ReturnToWorkProgram": {
					return {
						title: "Returning to work?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "The Return to Work (RTW) Program provides employees who incur an injury or illness, work or non-work related, the support and assistance to return to fully productive employement, as soon as medically feasible.",
						mainParagraphAriaLabel: "Return to Work Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Remember to stay in touch with your manager during your absence.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Be an active participant in all medical and vocational rehabiliation activities designed to faciliate your return.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "As soon as you have medical clearance to return to work, discuss your return with your manager. You may wwish to include a union representative in the conversation.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Work with your manager to develop a return to work plan. you may also need to talk to other stakeholders, for example, the Return to Work advisor or union representative.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Make your return to work/accommodation needs known and actively participate in discussions for the indetifcation of sutiable modified work.",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact GEN RTW-PRT",
						imageName: "82795851_l.jpg",
					}
				}
		
				default: {
					return {}
				}
			}		
		} else if(languageFlag == "fr") {
			switch(page) {
				
				case "app.component.ts": {
					return {
						settings: "Paramètres",
						language: "EN/FR",
						help: "Aidez-moi",
						logout: "Log"
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
				
				case "wellnesstracker.html": { //all trasnlated but Welness tracker
					return {
						resourceTitleText: "Journal de bord sur le bien-être",
						resPageText: "Choisissez la liste de ressources qui vous convient",
						buttonText1: "Jorunal de bord quotidien",
						buttonText2: "Graphique",
					}
				}

				case "home.html": {
					return {
						homeTitleText: "Tableau de bord",
						pageToolText1: "Mettez à l'essai nos outils!",
						buttonText1: "Vérification quotideienne",
						buttonText2: "Journal de bord sur le bien-être",
						buttonText3: "Outils (Arrive bientôt!)",
						buttonText4: "Ressources"
					}
				}
				
				case "dailyEntry.html": {
					return {
						dailyEntryText: "Inscription quotidienne",
						moodText: "Humeur",
						dietText: "Régime",
						sleepText: "Sommeil",
						stressText: "Stress",
						dateText: "Date",
						timeText: "Temps",
						descriptionText: "La description",
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
						resourceTitleText: "Resources",
						resPageText: "Choose the resource list that applies to you",
						buttonText1: "Employee Assistance Services",
						buttonText1AriaLabel: "Employee Assistance Services button",
						buttonText2: "Besoin de counseling?",
						buttonText2AriaLabel: "Besoin de counseling button",
						buttonText3: "Êtes-vous victime de harcèlement?",
						buttonText3AriaLabel: "Êtes-vous victime de harcèlement button",
						buttonText4: "Vous avez vécu un événement traumatisant?",
						buttonText4AriaLabel: "Vous avez vécu un événement traumatisant button",
						buttonText5: "Composer avec les conflits",
						buttonText5AriaLabel: "Composer avec les conflits button",
						buttonText6: "Menaces",
						buttonText6AriaLabel: "Menaces button",
						buttonText7: "Vous êtes de retour au travail?",
						buttonText7AriaLabel: "Vous êtes de retour au travail button",
						buttonText8: "Vous avez des problèmes liés à l’assiduité?",
						buttonText8AriaLabel: "Vous avez des problèmes liés à l’assiduité button",
						buttonText9: "Vous avez besoin de mesures d’adaptation?",
						buttonText9AriaLabel: "Vous avez besoin de mesures d’adaptation button"
					}
				}
				
				case "employee.html": {
					return {
						resourceTitleText: "Ressources pour les employés",
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
						resourceTitleText: "Famille des employés",
						resPageText: "Choisissez la liste de ressources qui vous convient",
						buttonText1: "Service d'écoute téléphonique en cas d'urgence",
						buttonText2: "Programme d;aide aux employés",
						buttonText3: "Services de santé mentale",
						buttonText4: "Numéro téléphone du soutien à la famille du SCC"
					}
				}
				
				case "public.html": {
					return {
						resourceTitleText: "Public",
						resPageText: "Choisissez la liste de ressources qui vous convient",
						buttonText1: "Service d'écoute téléphonique en cas d'urgence",
						buttonText2: "Association canadienne pur la santé mentale",
						buttonText3: "Gestion du stress lié aux incidents critiques",
						buttonText4: "Services de santé mentale de SCC"
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
						bottomButton: "GRAND PUBLIC"
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
				
				case "EmployeeProtectionProtocol": {
					return {
						title: "Menaces",
						callNowText: "Télephonez maintenant",
						mainParagraph: "Le Protocole de protection des employés (PPE) peut aider à vous protéger, votre famille et vous, contre les menaces, le harcèlement criminel et l’intimidation. Il n’est pas rare d’être exposé à des comportements difficiles lorsque l’on intervient auprès de délinquants. Vous pouvez être confronté à différents niveaux de comportement, selon votre poste et votre milieu de travail. Toutes les menaces ne s’équivalent pas. Si vous jugez que la situation n’est pas « normale », vous devez la signaler. Quoi faire en cas de menace?",
						mainParagraphAriaLabel: "Le Protocole de protection des employés (PPE) Summary",
						bulletPointHeader: "What to do when threatened:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Agissez sans tarder si vous pensez être en danger imminent ou en grave danger.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Dans le milieu de travail, vous devriez signaler la situation à votre gestionnaire sans tarder. Si un incident se produit après les heures normales de travail, suivez les procédures établies pour votre unité opérationnelle pour amorcer le processus prévu par le PPE. Par exemple:",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "en établissement, communiquez avec l’agent de service désigné pour votre établissement;",
						bulletPoint2SubPoint1AriaLabel: "Bullet two sub point one",
						bulletPoint2SubPoint2: "dans la collectivité, communiquez avec le Centre national de surveillance : 1 877 860 0617 {appelez maintenant};",
						
						bulletPoint2SubPoint2AriaLabel: "Bullet two sub point two",
						bulletPoint2SubPoint3: "à l’AC, composez le numéro d’urgence de la Sécurité de l’AC : 613-992-1486 {appelez maintenant}.",
						bulletPoint2SubPoint3AriaLabel: "Bullet two sub point three",
						
						bulletPoint3: "À l’extérieur du milieu de travail, vous devez vous éloigner de la menace. Prévenez immédiatement la police. Signalez ensuite la situation à votre gestionnaire dès que possible. ",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "",
						bulletPoint4AriaLabel: "Four Bullet Point",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact ???",
						imageName: "DSC_0848.jpg"
					}
				}
				
				case "EmployeeAssistanceServices": {
					return {
						title: "Employee Assistance Services",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Employee Assistance Services (EAS) is the national provider of Employee Assistance Program (EAP) services for the Correctional Service of Canada. They maintain the highest level of professionalism and confidentiality.",
						mainParagraphAriaLabel: "Employee Assistance Services (EAS) Summary",
						bulletPointHeader: "You can reach the crisis/rreferral line at 1-800-268-7708 or 1-800-567-5803 (TTY). It:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "is a confidential mental health service",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "is available 24 hours a day and 365 days a year",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "offers bilingual service (French & English)",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "is available at no cost for employees, their spouse and dependents",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "provides immediatge telephone crisis support and counselling if needed",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "coordinates refferals to a counsellor in your area",
						bulletPoint6AriaLabel: "Sixième puce",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact Employee Assistance Program",
						imageName: "36431210_l.jpg",
					}
				}
					
				case "CriticalIncidentStressManagement": {
					return {
						title: "Vous avez vécu un événement traumatisant?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Le Programme de gestion du stress à la suite d’un incident critique (PGSIC) est un système d’intervention en cas de crise conçu pour aider les employés du SCC et les membres de leur famille immédiate (conjoint et enfants vivant toujours à la maison). Ce service est offert à la suite d’incidents critiques, qui sont des événements traumatisants ne faisant pas partie de l’expérience humaine habituelle, comme des événements impliquant une violence extrême contre le personnel ou les délinquants, des blessures graves ou la mort, ou le fait d’être témoin de tels événements.",
						mainParagraphAriaLabel: "Le Programme de gestion du stress à la suite d’un incident critique (PGSIC) Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "Le PGSIC est offert par des employés formés du SCC, y compris des professionnels de la santé mentale.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Il comporte des interventions diversifiées, y compris des composantes comme l’éducation, le soutien sur place, le débreffage ou le désamorçage.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "La participation au PGSIC est volontaire, car vous n’êtes pas obligé d’utiliser le programme.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Il est confidentiel, et les pairs ne donnent pas de détails sur les utilisateurs du programme. ",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "Sixième puce",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "Septième puce",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Bouton de contact : GEN EAP-CISM/PAE-GSIC",
						imageName: "39280824_l.jpg",
					}
				}
				
				case "DutyToAccomodate": {
					return {
						title: "Vous avez besoin de mesures d’adaptation?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Le Programme sur l’obligation de prendre des mesures d’adaptation (OPDMA) veille à ce que le SCC respecte son obligation légale en matière de mesures d’adaptation en milieu de travail au sens de la loi canadienne. Le programme vise à créer un milieu de travail sans obstacle, à prévenir la discrimination fondée sur un motif illicite et à veiller à ce que les besoins particuliers d’un employé soient satisfaits de façon à garantir l’égalité des chances pour tous.",
						mainParagraphAriaLabel: "Le Programme sur l’obligation de prendre des mesures d’adaptation (OPDMA) Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "L’obligation de prendre des mesures d’adaptation signifie qu’il faut offrir des conseils et de l’orientation aux gestionnaires, aux superviseurs et aux intervenants en ressources humaines concernant le Programme sur l’OPDMA, le processus de prise de mesures d’adaptation, les questions d’adaptation liées à des cas particuliers, ainsi que les lois et les politiques connexes.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Le Programme informe toutes les parties de leurs rôles et de leurs responsabilités dans le cadre du processus d’adaptation.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Il offre du soutien aux gestionnaires et aux superviseurs pour la préparation des documents liés aux mesures d’adaptation.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Il facilite l’application et l’interprétation des politiques et de la jurisprudence récente.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Il offre des séances de formation et de sensibilisation aux partenaires et aux intervenants concernés.",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Bouton de contact : GEN-NAT-DTA-OPDMA",
						imageName: "43276279_l.jpg"
					}
				}

				case "EmployeeAssistanceProgram": {
					return {
						title: "Besoin de counselling?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Le Programme d’aide aux employés (PAE) est un programme bénévole qui offre du soutien aux employés et les sensibilise au bien-être.",
						mainParagraphAriaLabel: "Employee Assistance Program Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "Les agents d’aiguillage du PAE sont des employés formés du SCC sur chaque lieu de travail qui offrent bénévolement un soutien confidentiel à leurs collègues qui éprouvent des problèmes professionnels ou personnels qui ont une incidence sur leur productivité ou leur bien-être.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Ils peuvent vous aider, vous ou les membres de votre famille immédiate, à établir des liens avec des services de counseling à court terme par l’entremise du fournisseur de services du SCC, les Services d’aide aux employés (SAE).",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Ils peuvent vous offrir une oreille attentive, répondre à vos questions sur le programme, vous fournir de l’information sur les ressources internes et externes appropriées et faire un suivi, s’il y a lieu. ",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "",
						bulletPoint4AriaLabel: "",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "Services Titre relatif aux services de coiunseling à court terme",
						secondListBulletPoint1: "Les Services d’aide aux employés (SAE) offrent par téléphone un soutien et du counseling en cas de crise. Ce service immédiat et confidentiel peut également vous aiguiller vers un conseiller de votre région qui vous recevra en personne.",
						secondListBulletPoint1AriaLabel: "Deuxième liste, première puce",
						secondListBulletPoint2: "Jusqu’à huit séances sont offertes gratuitement à vous ou aux membres de votre famille immédiate. Remarque : Si votre problème exige une intervention à long terme, vous pouvez avoir accès à des services couverts par votre Régime de soins de santé de la fonction publique.",
						secondListBulletPoint2AriaLabel: "Deuxième liste, deuixème puce",
						secondListBulletPoint3: "Communiquez avec un agent d’aiguillage du PAE du SCC pour obtenir de plus amples renseignements. Vous pouvez aussi communiquer directement avec le service, en tout temps, à partir de n’importe quel endroit. Appelez les SAE maintenant, au 1-800-268-7708 Le service ATS est disponible au 1-800-567-5803, du lundi au vendredi, de 7 h 30 à 23 h (HNE). Un service de relais est disponible en dehors de ces heures",
						secondListBulletPoint3AriaLabel: "Deuxième liste, troisième puce",
						secondListFooter: "Appel PAE now: 1-800-268-7708",
						secondListFooterAriaLabel: "Appel PAE nombre",
						secondListFooterParagraph: "Appelez les SAE maintenant, au 1-800-268-7708 Le service ATS est disponible au 1-800-567-5803, du lundi au vendredi, de 7 h 30 à 23 h (HNE). Un service de relais est disponible en dehors de ces heures. ",
						secondListFooterParagraphAriaLabel: "TDD service description",
						contactName: "Appel Le Programme d’aide aux employés",
						imageName: "30051199_l.jpg",
					}
				}
				
				case "HarassmentPreventionProgram": {
					return {
						title: "Êtes-vous victime de harcèlement?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Le Programme sur la prévention du harcèlement (PPH) fournit des renseignements et des conseils aux employés et gestionnaires/superviseurs dans les cas présumés de harcèlement.",
						mainParagraphAriaLabel: "Harassment Prevention Program Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "Le PPH peut vous aider à vous informer au sujet des moyens informels et formels pour faire face au harcèlement.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Il offre de la formation en prévention du harcèlement.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Il fournit des renseignements sur les politiques, les lignes directrices en vigueur en matière de harcèlement et sur le processus à suivre pour porter plainte officiellement.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Il informe officiellement le fonctionnaire désigné approprié lorsqu’une plainte est officiellement déposée.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Il assure la liaison avec le plaignant et l’intimé.",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Communiquez avec le PPH à l’adresse suivante : GEN-NAT Harassment Prevention Harcèlement2",
						imageName: "33867343_l.jpg",
					}
				}
				
				case "NationalAttendanceManagementProgram": {
					return {
						title: "Vous avez des problèmes liés à l’assiduité?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Le Programme national de gestion de l’assiduité (PNGA) est conçu pour assurer une gestion uniforme et équitable de l’assiduité des employés. Il vise à améliorer l’assiduité en gérant chaque cas individuellement lorsque des problèmes surviennent.",
						mainParagraphAriaLabel: "Le Programme national de gestion de l’assiduité (PNGA) Summary",
						bulletPointHeader: "The National Attendance Management Program can:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Le PNGA aide à promouvoir et améliorer l’assiduité par la sensibilisation, l’intervention et la gestion des cas individuels.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Il assure l’application uniforme du PNGA et l’évaluation du programme.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Il fournit une formation aux coordonnateurs du PNGA et à la direction.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Il fournit des conseils et une orientation à tous les membres du personnel, y compris la direction et les coordonnateurs du PNGA.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Il établit le seuil applicable à chaque groupe professionnel en collaboration avec la Direction des processus opérationnels, des systèmes et des rapports en matière de ressources humaines.",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Bouton de contact par courriel : GEN-NAT-NAMP-PNGA",
						imageName: "47382242_l.jpg",
					}
				}
				
				case "ConflictManagement": {
					return {
						title: "Composer avec les conflits",
						callnowText: "Télephonez maintenant",
						mainParagraph: "",
						mainParagraphAriaLabel: "",
						bulletPointHeader: "Le Bureau de gestion des conflits (BGC) fournit des services confidentiels et impartiaux de gestion des conflits.",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Le BGC peut vous aider à en apprendre davantage sur les options informelles de résolution des conflits telles que les discussions facilitées, le coaching en résolution de conflits et la médiation.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Il fournit des interventions de groupe personnalisées.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Il donne des exposés, des ateliers, des séances de sensibilisation et de la formation sur la communication efficace et la gestion des conflits.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Il fournit des renseignements sur la manière de prévenir, gérer et résoudre les conflits en milieu de travail.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Communiquez avec le BGC à l’adresse suivante : GEN-NHQ OCM-BGC",
						imageName: "52115462_l.jpg",
					}
				}
				
				case "ReturnToWorkProgram": {
					return {
						title: "Vous êtes de retour au travail?",
						callnowText: "Télephonez maintenant",
						mainParagraph: "Le Programme de retour au travail fournit aux employés qui subissent une blessure ou sont atteints d’une maladie personnelle ou professionnelle l’aide et le soutien nécessaires pour qu’ils puissent reprendre un travail productif dès que leur état de santé le permet.",
						mainParagraphAriaLabel: "Aperçu du Programme de retour au travail",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "N’oubliez pas de rester en contact avec votre gestionnaire pendant votre absence.",
						bulletPoint1AriaLabel: "Première puce",
						bulletPoint2: "Participez activement à toutes les activités de réadaptation médicale et professionnelle conçues pour faciliter votre retour.",
						bulletPoint2AriaLabel: "Deuxième puce",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Dès que votre médecin vous autorise à retourner au travail, vous devez discuter de votre retour avec votre gestionnaire. Vous pouvez demander qu’un représentant syndical participe aux discussions.",
						bulletPoint3AriaLabel: "Troisième puce",
						bulletPoint4: "Collaborez avec votre gestionnaire pour établir un programme de retour au travail. Vous devrez peut-être discuter aussi avec d’autres intervenants, comme le conseiller en matière de retour au travail ou le représentant syndical.",
						bulletPoint4AriaLabel: "Quatrième puce",
						bulletPoint5: "Faites part de vos besoins en matière d’adaptation ou en vue d’un retour au travail et participez activement aux discussions pour trouver un travail modifié qui conviendra à votre situation.",
						bulletPoint5AriaLabel: "Cinquième puce",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secondListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secondListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Bouton de contact : GEN RTW-PRT",
						imageName: "82795851_l.jpg",
					}
				}
				
				default: {
					return {}
				}
			}
		}	
    }
}