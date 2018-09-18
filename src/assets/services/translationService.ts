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
						buttonText7: "Return to Work Program",
						buttonText8: "National Attendance Management Program",
						buttonText9: "Duty to Accommodate"
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
				
				case "EmployeeProtectionProtocol": {
					return {
						title: "Employee Protection Protocol",
						callNowText: "Call now",
						mainParagraph: "The Employee Protection Protocol (EPP) can help keep you and your family safe from threats, criminal harassment and intimidation. It is not uncommon to encounter difficult behaviour when dealing with offenders. You may experience different degrees of such bahviour depending on what you do and where you work. All threats are not equal. If you feel the situation is not 'normal' you should report it.",
						mainParagraphAriaLabel: "Employee Protection Protocol (EPP) Summary",
						bulletPointHeader: "What to do when threatened:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Take immediate action if you perceive that you are in imminent or serious danger",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "Inside the workplace you should report the situation to your manager right away. If something happens outside of normal working hours, follow established procedures for your site to start the EPP process. For example:",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "At the institutions, contact the designated duty officer for your facility",
						bulletPoint2SubPoint1AriaLabel: "Bullet two sub point one",
						bulletPoint2SubPoint2: "In the community, contact the National Monitoring Centre: 1-877-860-0617",
						
						bulletPoint2SubPoint2AriaLabel: "Bullet two sub point two",
						bulletPoint2SubPoint3: "At NHQ, contact the NHQ security number: 613-992-1486",
						bulletPoint2SubPoint3AriaLabel: "Bullet two sub point three",
						
						bulletPoint3: "Outside the workplace you should distance yourself from the threat. Contact the police immediately. Then report the situation to your manager as soon as possible.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "",
						bulletPoint4AriaLabel: "Four Bullet Point",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "Fifth Bullet Point",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
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
						callNowText: "Call now",
						mainParagraph: "Employee Assistance Services (EAS) is the national provider of Employee Assistance Program (EAP) services for the Correctional Service of Canada. They maintain the highest level of professionalism and confidentiality.",
						mainParagraphAriaLabel: "Employee Assistance Services (EAS) Summary",
						bulletPointHeader: "You can reach the crisis/rreferral line at 1-800-268-7708 or 1-800-567-5803 (TTY). It:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "is a confidential mental health service",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "is available 24 hours a day and 365 days a year",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "offers bilingual service (French & English)",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "is available at no cost for employees, their spouse and dependents",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "provides immediatge telephone crisis support and counselling if needed",
						bulletPoint5AriaLabel: "Fifth Bullet Point",
						bulletPoint6: "coordinates refferals to a counsellor in your area",
						bulletPoint6AriaLabel: "Sixth Bullet Point",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
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
						title: "Critical Incident Stress Management",
						callNowText: "Call now",
						mainParagraph: "The Critical Incident Stress Management (CISM) program is a crisis intervention system that is designed to support CSC employees and their immediate family members (including a spouse or children who are still living at home). This service is available following critical incidents, which are traumatic events outside the usual range of human experience, such as events involving extreme violence against staff or offenders, severe injury or death, or the witnessing of such events.",
						mainParagraphAriaLabel: "Critical Incident Stress Management (CISM) Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "CISM is offered by trained CSC employees, including mental health professionals.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "It is diverse in it's interventions, including components such aas education, on-scene support, and debriefing or defusing.",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "CISM is voluntary, as you are not obligated to use the program.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "It is confidential, peers do not provide details about who uses the program.",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "Fifth Bullet Point",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "Sixth Bullet Point",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "Seventh Bullet Point",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
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
						title: "Duty to Accomodate",
						callNowText: "Call now",
						mainParagraph: "The Duty to Accommodte (DTA) Program ensures that CSC is meeting its legal obligation regarding workplace accommodation as defined by Canadian legislation. The program strives to create a barrier free workplace; prevent discrimination based on a prohibted ground; and to ensure that employees' specific needs are accommodated by offerring equal opportunites for all.",
						mainParagraphAriaLabel: "Duty to Accommodate Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "Duty to Accommodate provides advice and guidance to managers/supervisors and human resource practitioners on the DTA program, the accommodation process, case specific accommodation matters as well as related legislation and policies.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "Informs and educates all parties of their role and responsbilities in the accommodation process.",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Assists managers/supervisors with preparing accommodtion related documents.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "Assists with application and interpretation of policy and emerging case law.",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "Provides training./awareness sessions to relevant partners and stakeholders.",
						bulletPoint5AriaLabel: "Fifth Bullet Point",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
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
						title: "Employee Assistance Program",
						callNowText: "Call now",
						mainParagraph: "The Employee Assistance Program (EAP) is a voluntary program which provides support to employees and raises awareness about wellbeing.",
						mainParagraphAriaLabel: "Employee Assistance Program Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "",
						bulletPoint1: "EAP referral agents are trained CSC employees at each worksite who volunteer to provide confidential support to their colleagues who are experiencing work-related or personal problems affecting their productivity or well-being.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "They can help you or your immediate family members connect to short-term counselling support services through CSC's service provider, Employee Assistance Services (EAS)",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "",
						bulletPoint3AriaLabel: "Third Bullet Point",
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
						secoundListBulletPoint1AriaLabel: "Second list, bullet point 1",
						secondListBulletPoint2: "Up to 8 sessions is available at no cost to you, or your immediaate family members. Note: if your presenting issue requires long-term intervention, you can access services covered by your Public Service Health Care Plan.",
						secoundListBulletPoint2AriaLabel: "Second list, bullet point 2",
						secondListBulletPoint3: "Contact a CSC EAP Referral Agent for mroe information, or you may contact the service directly, at any time, from any location.",
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
						title: "Harassment Prevention Program",
						callNowText: "Call now",
						mainParagraph: "The Harassment Prevention Program provides information and advice to employees and managers/supervisors in cases of alleged harassment.",
						mainParagraphAriaLabel: "Harassment Prevention Program Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "The Harassment Prevention Program can help you learn about informal and formal ways to deal with harassment.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "It offers training in harassment prevention.",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Provides information on the policy, guidelines and the formaal complaint process.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "It advises appropriate designated official in a formal process.",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
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
						title: "National Attendance Management Program",
						callNowText: "Call now",
						mainParagraph: "CSC's National Attendance Management Program (NAMP) is to ensure consistent, supportive and fair management of employee attendance while respecting collective agreements. To promote and improve attendance through awareness, intervention and individual case management.",
						mainParagraphAriaLabel: "National Attendance Management Program (NAMP) Summary",
						bulletPointHeader: "The National Attendance Management Program can:",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Provide early intervention.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "Provide support for employees.",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Assist in identifying and resolving workplace issues that may contribute to absenteeism.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "Help develop attendance management action plans.",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "",
						bulletPoint5AriaLabel: "",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact GEN RTW-PRT",
						imageName: "47382242_l.jpg",
					}
				}
				
				case "ConflictManagement": {
					return {
						title: "Conflict Management",
						callNowText: "Call now",
						mainParagraph: "",
						mainParagraphAriaLabel: "",
						bulletPointHeader: "The Office of Conflict Management (OCM)",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Provide confidential and impartial conflict management services.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "Discuss informal options such as facilitated discussion, conflict coaching and mediation.",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "Provide customized group interventions.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "Provide presentations, workshops, awareness sessions and training on effective communication and conflict management.",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "Visit the Conflict management Hub website to find information on the OCM and on how to prevent, manage, and resolve conflicts in the workplace.",
						bulletPoint5AriaLabel: "Fifth Bullet Point",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
						secondListBulletPoint3: "",
						secondListFooter: "",
						secondListFooterAriaLabel: "",
						secondListFooterParagraph: "",
						secondListFooterParagraphAriaLabel: "",
						contactName: "Contact OCM",
						imageName: "52115462_l.jpg",
					}
				}
				
				case "ReturnToWorkProgram": {
					return {
						title: "Return to Work Program",
						callNowText: "Call now",
						mainParagraph: "The Return to Work (RTW) Program provides employees who incur an injury or illness, work or non-work related, the support and assistance to return to fully productive employement, as soon as medically feasible.",
						mainParagraphAriaLabel: "Return to Work Summary",
						bulletPointHeader: "",
						bulletPointHeaderAriaLabel: "Bullet Point Header",
						bulletPoint1: "Remember to stay in touch with your manager during your absence.",
						bulletPoint1AriaLabel: "First Bullet Point",
						bulletPoint2: "Be an active participant in all medical and vocational rehabiliation activities designed to faciliate your return.",
						bulletPoint2AriaLabel: "Second Bullet Point",
						bulletPoint2SubPoint1: "",
						bulletPoint2SubPoint1AriaLabel: "",
						bulletPoint2SubPoint2: "",
						bulletPoint2SubPoint2AriaLabel: "",
						bulletPoint2SubPoint3: "",
						bulletPoint2SubPoint3AriaLabel: "",
						bulletPoint3: "As soon as you have medical clearance to return to work, discuss your return with your manager. You may wwish to include a union representative in the conversation.",
						bulletPoint3AriaLabel: "Third Bullet Point",
						bulletPoint4: "Work with your manager to develop a return to work plan. you may also need to talk to other stakeholders, for example, the Return to Work advisor or union representative.",
						bulletPoint4AriaLabel: "Fourth Bullet Point",
						bulletPoint5: "Make your return to work/accommodation needs known and actively participate in discussions for the indetifcation of sutiable modified work.",
						bulletPoint5AriaLabel: "Fifth Bullet Point",
						bulletPoint6: "",
						bulletPoint6AriaLabel: "",
						bulletPoint7: "",
						bulletPoint7AriaLabel: "",
						secondListTitle: "",
						secondListTitleAriaLabel: "",
						secondListBulletPoint1: "",
						secoundListBulletPoint1AriaLabel: "",
						secondListBulletPoint2: "",
						secoundListBulletPoint2AriaLabel: "",
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

                case "resinfo.html": {
                    return {
                        resTitle: "Test Resources",
                        resParagraph1Text: "Stuff here",
                      
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