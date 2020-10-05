import React from "react";
import { TouchableOpacity, View, StatusBar, ScrollView } from "react-native";
import styled from "styled-components";
import i18n from "../locale/i18n";

const TermsScreen = (props) => {
  const goBack = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={ false } backgroundColor="#dc4c18" translucent={ true } />
      <Page>
        <Title>{ i18n.t("signup_terms_link") }</Title>
        <ScrollView>
          <LinksTS>
            <TouchableOpacity style={ { flexDirection: "row" } }>
              <TextContainerTS style={ { flexShrink: 1 } }>
                <Text style={ { color: "#dc4c18", fontSize: 14 } }>
                  1. Who We Are.

                  1.1 EEO Services.

                  Welcome to EEO! We are an Endava event management platform dedicated to organizing all Endava events. Through our platform, mobile apps and services, we enable people all over the world to sign up and join virtual and onsite Endava events.

                  EEO's products, features and offerings are available online and through mobile applications.

                  1.2 Who's Who.

                  When this Privacy Policy uses the term "Organizer" we mean internal event creators using the Services to create events for consumers using our Services to consume information about, or attend, events ("Consumers"), or for any other reason. Organizers, Consumers and third parties using our Services are all referred to in these Terms collectively as "Users", "you" or "your".

                  EEO, Inc. is powered by Endava with its principal place of business in Urquiza 2284. If you are resident in the EEA or Switzerland, EEO, Inc. is the responsible party with respect to Personal Data (defined below) collected through the Services. EEO's representative for European data protection law purposes is Sara Sarasa. with its principal place of business at Urquiza 2284.

                  If you have any questions or concerns at any time, please do not hesitate to contact us at the address above or by contacting us at EEO@endava.com.

                  2. Our Privacy Statement.

                  2.1 Application.

                  This Privacy Policy sets forth our policy with respect to information that can be associated with or which relates to a person and/or could be used to identify a person ("Personal Data") that is collected from Users on or through the Services. We take the privacy of your Personal Data seriously. Because of that, we have created this Privacy Policy. Please read this Privacy Policy as it includes important information regarding your Personal Data and other information.

                  "Non-Personal Data" as used in this Privacy Policy is therefore any information that does not relate to a person and/or cannot be used to identify a person. When you interact with the Services, we may collect Non-Personal Data. The limitations and requirements in this Privacy Policy on our collection, use, disclosure, transfer and storage/retention of Personal Data do not apply to Non-Personal Data.
                  3-4
                  3. Personal Data That We Collect.

                  When you use or interact with us through the Services, we may collect Personal Data. Sometimes this will be on our own behalf and other times this will be on behalf of an Organizer using our Services to run an event. This is an important distinction for purposes of certain data protection laws and is explained in more detail below.

                  3.1 Information Collected From All Users.

                  Information you provide to us: For all Users we collect Personal Data when you voluntarily provide such information to the Services, such as when you register for access to the Services, contact us with inquiries, respond to one of our surveys or browse or use certain parts of the Services. The Personal Data we may collect includes without limitation your name, email address and any other information that you choose to provide and/or that enables Users to be personally identified.

                  Information we automatically collect: We also automatically collect certain technical data that is sent to us from the computer, mobile device and/or browser through which you access the Services ("Automatic Data"). Automatic Data, includes without limitation, a unique identifier associated with your access device and/or browser (including, for example, your Internet Protocol (IP) address) characteristics about your access device and/or browser, statistics on your activities on the Services, information about how you came to the Services and data collected through Cookies, Pixel Tags, Local Shared Objects, Web Storage and other similar technologies. You can find out more information about how we use Cookies and other similar tracking technologies in our Cookie Statement.

                  When you register for the Services or otherwise submit Personal Data to us, we may associate other Non-Personal Data (including Non-Personal Data we collect from third parties) with your Personal Data. At such instance, we will treat any such combined data as your Personal Data until such time as it can no longer be associated with you or used to identify you.

                  3.2 Information Collected From Consumers.

                  If you are a Consumer we will collect additional Personal Data from you, sometimes for our own purposes and other times on behalf of an Organizer (see Section 16 below for more information).

                  Information you provide via EEO Properties or Applications: Organizers can set up event registration pages to collect virtually any information from Consumers in connection with registration for an Organizer's event listed on the Services. EEO does not control an Organizer's registration process nor the Personal Data that they collect. When you register for, or otherwise provide information to EEO in conjunction with an Organizer event or activity, whether that information is yours or a third party’s, that Organizer will receive and may use the information you provide. Please see

                  Information we obtain from other sources: We may also collect or receive Personal Data from third party sources, such as Organizers, other Consumers, social media or other third party integrations.

                  4. How We Use Your Personal Data.

                  We collect and use the Personal Data we collect in a manner that is consistent with this Privacy Policy, and applicable privacy laws. We may use the Personal Data as follows:

                  4.1 Specific Reason.

                  If you provide Personal Data for a certain purpose, we may use the Personal Data in connection with the purpose for which it was provided. For instance, if you contact us by email, we will use the Personal Data you provide to answer your question or resolve your problem and will respond to the email address from which the contact came.

                  4.2 Access and Use.

                  If you provide Personal Data in order to obtain access to or use of the Services or any functionality thereof, we will use your Personal Data to provide you with access to or use of the Services or functionality and to analyze your use of such Services or functionality. For instance, if you supply Personal Data relating to your identity or qualifications to use certain portions of the Services, we will use that information to make a decision as to granting you access to use such Services and to assess your ongoing qualification to use such Services.

                  4.3 Internal Business Purposes.

                  We may use your Personal Data for internal business purposes, including without limitation, to help us improve the content and functionality of the Services, to better understand our Users, to improve the Services, to protect against, identify or address wrongdoing, to enforce our Terms of Service, to manage your account and provide you with customer service, and to generally manage the Services and our business.

                  4.4 EEO Marketing.

                  We may use your Personal Data for our marketing and advertising purposes, including (without limitation) by email, SMS marketing, display media, and targeting other devices (such as tablets, mobile devices and televisions). We do this in order to inform you about services or events we believe might be of interest to you, develop promotional or marketing materials and display EEO or event-related content and advertising on or off the Services that we believe might be of interest to you. We may also do this on behalf of an Organizer, for example where your prior interactions with an Organizer suggest you may be interested in a particular type of event. See "Opt Out from Electronic Communications" below on how to opt out of various EEO marketing communications.

                  You may see advertisements for our Services (or our Organizer’s events) on third party websites, including on social media platforms. Where you see an advertisement on a third party website or social media platform, this may be because we engaged the third party or social media platform to show this advertisement to our Users, or to others who have similar attributes to our Users. In some cases, this involves sharing your email address or other contact details with the third party or social media platform so that they can identify you as one of our Users, or identify other individuals with similar attributes to you in order to show them advertisements for our Services (or for our Organizer’s events). If you no longer want your Personal Data to be used for these purposes please contact us at EEO@endava.com. For more information about how we market on, and interact with social media sites, please refer to section 5.6.

                  4.5 Organizer Emails.

                  We allow Organizers to use our email tools to contact Consumers for their current and past events, so you may receive emails from our system that originate with such Organizers and that we send on their behalf. If you registered for an event on the Services, your email address is available to that Organizer. However, Organizers may also import the email addresses they have from external sources and send communications through the Services to those email addresses, and we will deliver those communications to those email addresses on the Organizer's behalf. The Organizer and not EEO is responsible for sending these emails. See "Opt Out from Electronic Communications" below on how to opt out of Organizer-initiated communications.

                  4.6 Use of Interest-Based Data

                  We sometimes make inferences about the type of events or activities you may be interested in. We may use these inferences to help target advertising or customize recommendations to you, including on behalf of Organizers. We may do this on an aggregated or generalized basis. For instance, we may determine that our users who attend many comedy events also often attend or show interest in endurance-related events or content. We may direct (or assist in directing) content or recommendations related to both comedy and endurance to those Users.

                  4.7 Other Purposes.

                  If we intend to use any Personal Data in any manner that is not consistent with this Privacy Policy, you will be informed of such anticipated use prior to or at the time the Personal Data is collected or we will obtain your consent subsequent to such collection but prior to such use.

                  4.8 Aggregated Personal Data.

                  In an ongoing effort to understand and serve our Users better, we often conduct research on our customer demographics, interests and behavior based on Personal Data and other information that we have collected. This research is typically conducted on an aggregate basis only that does not identify you. Once Personal Data is in an aggregated form, for purposes of this Privacy Policy, it becomes Non-Personal Data.
                  5-6
                  5. How We Disclose And Transfer Your Personal Data.

                  5.1 Background.

                  We are not in the business of selling your Personal Data. We consider this information to be a vital part of our relationship with you. Therefore, we will not sell your Personal Data to third parties, including third party advertisers. There are certain circumstances in which we may disclose, transfer or share your Personal Data with certain third parties without further notice to you, as set forth in this Privacy Policy.

                  5.2 Business Transfers.

                  As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, Personal Data may be part of the transferred assets. We may also disclose your Personal Data in the course of due diligence for such an event. You acknowledge and agree that any successor to or acquirer of EEO (or its assets) will continue to have the right to use your Personal Data and other information in accordance with the terms of this Privacy Policy.

                  5.3 Parent Companies, Subsidiaries and Affiliates.

                  We may also share your Personal Data with our parent companies, subsidiaries and/or affiliates for purposes consistent with this Privacy Policy. Our parent companies, subsidiaries and affiliates will be bound to maintain that Personal Data in accordance with this Privacy Policy.

                  5.4 Agents, Consultants and Service Providers.

                  We may share your Personal Data with our contractors and service providers who process Personal Data on behalf of EEO to perform certain business-related functions. These companies include our marketing agencies, online advertising providers, data enhancement and data services providers, database service providers, backup and disaster recovery service providers, email service providers, payment processing partners, customer support, tech support, hosting companies and others. When we engage another company to perform such functions, we may provide them with information, including Personal Data, in connection with their performance of such functions.

                  5.5 Organizers.

                  In addition, when you register for an event, sign up for communications, enter a contest, or otherwise input your Personal Data (such as through a web form) to communicate with an Organizer or participate in an Organizer event, that Organizer will receive that information. For instance, if you input your name and email address into a web form for an Organizer offer, activity or event, the Organizer will receive that information. The Organizer may then send you marketing or other communications, which may be subject to its own, separate privacy policy. Likewise, if you provide your mobile phone number, you may receive information messages related to the service, event, activity or information in which you’ve expressed interest.

                  We are not responsible for the actions of these Organizers, or their Third Party Organizers (or other downstream recipients of your Personal Data), with respect to your Personal Data. It is important that you review the applicable policies of the Organizers, and if applicable and available, their appointed Third Party Organizers, of an event (and the related fundraising page, if applicable) before providing Personal Data or other information in connection with that event or related fundraising page.

                  Similarly, if you are a member of an Organizer's organization within EEO, your Personal Data will be available to the Organizer and shared with those Third Party Organizers granted permission by the Organizer to view all members of the Organizer's organization.

                  5.6 Facebook, Social Media and Other Third Party Connections.

                  a. Connecting Your EEO Account to Social Media Services. You can connect your EEO account to your accounts on third party services like Facebook, in which case we may collect, use, disclose, transfer and store/retain information relating to your account with such third party services in accordance with this Privacy Policy. For example, if you connect with Facebook, we store your Facebook id, first name, last name, email, location, friends list and profile picture and use them to connect with your Facebook account to provide certain functionality on the Services, like recommending events that your Facebook friends are interested in and sharing the events you are interested in, or attending, with certain groups of people like your Facebook friends.

                  b. “Liking” or “Following” EEO on Social Media. In addition, when you “like” or “follow” us on Facebook, Instagram, Twitter or other social media sites (to the extent we provide that capability), we may collect some information from you including your name, email address, and any comments or content you post relevant to us. We likewise may collect your information if you sign up for one of our promotions or submit information to us through social media sites.

                  c. Facebook Plug-Ins and Links on Our Pages. EEO’s own website may contain links to Facebook as well, such as through the Facebook “Like” or “Share” button or other social plug-ins. When you interact with these features and links, your browser will establish a direct link with the Facebook servers, and Facebook will receive information about your browser and activity, and may link it to your Facebook user account. For more information about how Facebook uses data, please see Facebook’s own policies.

                  d. Additional Facebook Marketing and Connectivity. In addition, if you are a member of Facebook (or another social media platform), and you provide Personal Data to an Organizer (such as in the ways described in Section 5.5), the Organizer may use that Personal Data to send you advertising and offers through Facebook (or another social media) platform, including when you are on Facebook or another social media platform. The Organizer may work with us and with third parties to enable this data integration and advertising. Facebook and other social media platforms may provide a way to opt out of this type of advertising. Please review their user settings and support pages to learn more about how they help you to manage privacy and marketing choices.

                  e. Third party services and integrations. EEO may provide you with opportunities to contract directly with third parties, and/or to integrate with third party services or applications, through our platform. In such instances, we will disclose your Personal Data to other entities in order to fulfill a request by you, or to provide services you have requested.

                  5.7 Legal Requirements.

                  We may disclose your Personal Data if required to do so by law in order to (for example) respond to a subpoena or request from law enforcement, a court or a government agency (including in response to public authorities to meet national security or law enforcement requirements), or in the good faith belief that such action is necessary to (a) comply with a legal obligation, (b) protect or defend our rights, interests or property or that of third parties, (c) prevent or investigate possible wrongdoing in connection with the Services, (d) act in urgent circumstances to protect the personal safety of Users of the Services or the public, or (e) protect against legal liability.

                  6. How We Store Your Personal Data.

                  We may store Personal Data itself or such information may be stored by third parties to whom we have transferred it in accordance with this Privacy Policy. We take what we believe to be reasonable steps to protect the Personal Data collected via the Services from loss, misuse, unauthorized use, access, inadvertent disclosure, alteration and destruction. However, no network, server, database or Internet or email transmission is ever fully secure or error free. Therefore, you should take special care in deciding what information you send to us electronically. Please keep this in mind when disclosing any Personal Data.
                  7-8
                  7. How You Can Access, Update, Correct or Delete Your Personal Data.

                  You can access or delete your Personal Data stored by us. If you are a registered User, you can do this by logging in and visiting the Account Settings page to download a copy of your Personal Data in machine readable form and/or delete your Personal Data. You can also edit some of your Personal Data directly through your account. In certain cases, you can ask us to correct and update any inaccurate Personal Data using the contact information below, and we will consider your request in accordance with applicable laws.

                  If a Consumer initiates a data deletion request, EEO is authorized to delete or anonymize Personal Data of the requesting Consumer from the Services even if that means removing its availability to the Organizer through the Services. However, if you are a Consumer, you understand that even if EEO deletes or anonymizes your Personal Data upon your request or pursuant to this Policy, your Personal Data may still be available in the Organizer's own databases if transmitted to the Organizer prior to EEO receiving or taking action on any deletion or anonymization activity.

                  Unregistered Users may also access, update, correct or delete Personal Data and exercise these rights using the contact information below. We will consider and respond to all requests in accordance with applicable law.

                  8. How Long We Retain Your Personal Data.

                  We may retain your Personal Data as long as you are registered to use the Services. You may delete your account by visiting the Account Settings page. However, we may retain Personal Data for an additional period as is permitted or required under applicable laws. Even if we delete your Personal Data it may persist on backup or archival media for an additional period of time for legal, tax or regulatory reasons or for legitimate and lawful business purposes.
                  9-10
                  9. Cookies, Pixels Tags, Local Shared Objects, Web Storage And Similar Technologies.

                  Please refer to our Cookie Statement for more information about our use of cookies and other similar tracking technologies.

                  10. Your Choices.

                  You have several choices available when it comes to your Personal Data:

                  10.1 Limit the Personal Data You Provide.

                  You can browse the Services without providing any Personal Data (other than Automatic Data to the extent it is considered Personal Data under applicable laws) or with limiting the Personal Data you provide. If you choose not to provide any Personal Data or limit the Personal Data you provide, you may not be able to use certain functionality of the Services. For instance, in order to buy tickets as a Consumer, your name and email address will be required by the Organizer.

                  10.2 Opt Out from Electronic Communications.

                  (a) EEO Marketing Communications.

                  Where it is in accordance with your marketing preferences, EEO may send you electronic communications marketing or advertising the Services themselves or events on the Services, to the extent you have registered for the Services or purchased a ticket and/or registration to an event listed on the Services. You can also "opt out" of receiving these electronic communications by clicking on the "Unsubscribe" link at the bottom of any such electronic communication. In addition, you may also manage your email preferences at any time by logging in (or signing up and then logging in), clicking on "Account" and then "Email Preferences."

                  (b) Organizer-initiated Communications.

                  Organizers may use our email tools to send electronic communications to those on their email subscription lists, including Consumers who have registered for their events on the Services in the past. Although these electronic communications are sent through our system, EEO does not determine the content or the recipients of these electronic communications. Organizers are required to use our email tools only in accordance with all applicable laws. EEO provides an "Unsubscribe" link on each of these emails, which allows recipients to "opt out" of electronic communications from the particular Organizer.

                  (c) Social Notifications.

                  If you connect your Facebook account or sign up for other social media integrations whose product features include social notifications (i.e., updates on what your friends are doing on the Services), you will receive these social notifications. You can manage these social notifications by toggling your social settings to private or disconnecting such integration.


                  (d) Retention.

                  It may take up to forty-eight (48) hours for us to process an unsubscribe request. Even after you opt out of all electronic communications, we will retain your Personal Data in accordance with this Privacy Policy, however, we will no longer use it to contact you. However, Organizers who have received your Personal Data in accordance with this Privacy Policy may still use that Personal Data to contact you in accordance with their own privacy policies, but they may not use our system to do so.

                  10.3 Do Not Track.

                  We currently do not participate in any "Do Not Track" frameworks that would allow us to respond to signals or other mechanisms from you regarding the collection of your Personal Data.
                  11-12
                  11. Exclusions.

                  11.1 Personal Data Provided to Others.

                  This Privacy Policy does not apply to any Personal Data that you provide to another User or visitor through the Services or through any other means, including to Organizers on event pages or information posted by you to any public areas of the Services.

                  11.2 Third Party Links.

                  This Privacy Policy applies only to the Services. The Services may contain links to other websites not operated or controlled by us (the "Third Party Sites"). The policies and procedures we described here do not apply to the Third Party Sites. The links from the Services do not imply that we endorse or have reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.

                  12. Children - Children's Online Privacy Protection Act.

                  We do not knowingly collect Personal Data from children under the age of thirteen (13). If you are under the age of thirteen (13), please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data through the Services without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Data to us through the Services, please contact us and we will endeavor to delete that information from our databases.
                  13-14
                  13. International Privacy Laws.

                  If you are visiting the Services from outside the United States, please be aware that you are sending information (including Personal Data) to the United States where our servers are located. That information may then be transferred within the United States or back out of the United States to other countries outside of your country of residence, depending on the type of information and how it is stored by us. These countries (including the United States) may not necessarily have data protection laws as comprehensive or protective as those in your country of residence; however, our collection, storage and use of your Personal Data will at all times continue to be governed by this Privacy Policy.

                  14. Changes To This Privacy Policy.

                  The Services and our business may change from time to time. As a result, at times it may be necessary for us to make changes to this Privacy Policy. We reserve the right, in our sole discretion, to update or modify this Privacy Policy at any time (collectively, "Modifications"). Modifications to this Privacy Policy will be posted to the Site with a change to the "Updated" date at the top of this Privacy Policy. In certain circumstances EEO may, but need not, provide you with additional notice of such Modifications, such as via email or with in-Service notifications. Modifications will be effective thirty (30) days following the "Updated" date or such other date as communicated in any other notice to you.

                  Please review this policy periodically, and especially before you provide any Personal Data. This Privacy Policy was updated on the date indicated above. Your continued use of the Services following the effectiveness of any Modifications to this Privacy Policy constitutes acceptance of those Modifications. If any Modification to this Privacy Policy is not acceptable to you, you should cease accessing, browsing and otherwise using the Services.
                  15-16
                  15. Dispute Resolution.

                  If you have a complaint about EEO's privacy practices you should write to us at:

                  EEO, Inc Urquiza 2284. We will take reasonable steps to work with you to attempt to resolve your complaint.

                  Residents of the EEA, Switzerland or the UK who believe that their information has not been processed in compliance with the Privacy Shield Principles may raise their complaints in a number of ways. For further information, please see our Privacy Shield Notice.

                  16. EEA, SWITZERLAND AND UK ONLY

                  The EU General Data Protection Regulation (GDPR)

                  In May 2018, a new data privacy law known as the EU General Data Protection Regulation (or the "GDPR") went into effect. The GDPR requires EEO and Organizers using the Service to provide Users with more information about the processing of their Personal Data.

                  Here is what you need to know:

                  Legal grounds for processing your Personal Data

                  The GDPR requires us to tell you about the legal ground we're relying on to process any Personal Data about you. The legal grounds for us processing your Personal Data for the purposes set out in Section 4 above will typically be because:

                  • you provided your consent;
                  • it is necessary for our contractual relationship;
                  • the processing is necessary for us to comply with our legal or regulatory obligations; and/or
                  • the processing is in our legitimate interest as an event organizing and ticketing platform (for example, to protect the security and integrity of our systems and to provide you with customer service, etc.).

                  Transfers of Personal Data

                  As EEO is a global company, we may need to transfer your Personal Data outside of the country from which it was originally provided. This may be intra-group or to third parties that we work with who may be located in jurisdictions outside the EEA, Switzerland and the UK which have no data protection laws or laws that are less strict compared with those in Europe.

                  Whenever we transfer Personal Data outside of the EEA, Switzerland or the UK, we take legally required steps to make sure that appropriate safeguards are in place to protect your Personal Data. For Personal Data we receive from the EEA, Switzerland and the UK, EEO, Inc has certified its compliance to the EU-U.S. and Swiss-U.S. Privacy Shield as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal data transferred from those countries. We have certified that we adhere to the Privacy Shield principles of Notice, Choice, Accountability for Onward Transfers, Security, Data Integrity & Purpose Limitation, Access and Recourse, Enforcement & Liability when processing Personal Data from the EEA, Switzerland or the UK in the United States. You can find out more about our commitment to the EU-U.S. and Swiss-U.S. Privacy Shield Framework in our Privacy Shield Notice.

                  Feel free to contact us as set forth in Section 15 for more information about the safeguards we have put in place to protect your Personal Data and privacy rights in these circumstances.

                  Personal Data retention

                  We retain your Personal Data for as long as necessary to provide you with our Services, or for other important purposes such as complying with legal obligations, resolving disputes, and enforcing our agreements.

                  If you have an account with us, we will typically retain your Personal Data for a period of ninety (90) days after you have requested that your account is closed or if it's been inactive for seven (7) years.

                  Your rights.

                  Data protection law provides you with rights in respect of Personal Data that we hold about you, including the right to request a copy of the Personal Data, request that we rectify, restrict or delete your Personal Data, object to profiling and unsubscribe from marketing communications.

                  For the most part, you can exercise these rights by logging in and visiting the My Account page or changing the "cookie settings" in your browser (see our Cookie Statement for more information). If you can't find what you're looking for in the My Account page, please contact us using the contact information set out in Section 15 above. Please note that requests to exercise data protection rights will be assessed by us on a case-by-case basis. There may be circumstances where we are not legally required to comply with your request because of the laws in your jurisdiction or because of exemptions provided for in data protection legislation.

                  If you have a complaint about how we handle your Personal Data, please get in touch with us as set forth in Section 15 to explain. If you are not happy with how we have attempted to resolve your complaint, you may contact the relevant data protection authority.

                  EEO as a data controller and a data processor

                  EU data protection law makes a distinction between organizations that process Personal Data for their own purposes (known as "data controllers") and organizations that process personal data on behalf of other organizations (known as "data processors"). If you have a question or complaint about how your Personal Data is handled, these should always be directed to the relevant data controller since they are the ones with primary responsibility for your Personal Data.

                  EEO may act as either a data controller or a data processor in respect of your Personal Data, depending on the circumstances.

                  For example, if you create an account with us to organize your events, EEO will be a data controller in respect of the Personal Data that you provide as part of your account. We will also be a data controller of the Personal Data that we have obtained about the use of the Applications or EEO Properties, which could relate to Organizers or Consumers. We use this to conduct research and analysis to help better understand and serve Users of the Services as well as to improve our platform and provide you with more targeted recommendations about events we think may be of interest to you.

                  However, if you register for an event as a Consumer, we will process your Personal Data to help administer that event on behalf of the Organizer (for example, sending confirmation, promotional and feedback emails, processing payments, etc.) and to help the Organizer target, and understand the success of, their event and event planning (for example, providing event reports, using analytics to gain insights into the effectiveness of various sales channels, etc.). In these circumstances, EEO merely provides the tools for Organizers; EEO does not decide what Personal Data to request on registration forms, nor is it responsible for the continued accuracy any Personal Data provided. Any questions that you may have relating to your Personal Data and your rights under data protection law should therefore be directed to the Organizer as the data controller, not to EEO.
                  17-18
                  17. CALIFORNIA RESIDENTS ONLY.

                  If you are a California resident, we provide additional information about our information practices and you may have certain rights with respect to your information. For more information, please see the State-Specific Supplemental Privacy Notices here.

                  18. NEVADA RESIDENTS ONLY.

                  If you are a Nevada resident, you may have certain rights with respect to your information. For more information, please see the State-Specific Supplemental Privacy Notices here.

                </Text>
              </TextContainerTS>
            </TouchableOpacity>
          </LinksTS>
        </ScrollView>
        <Button onPress={ goBack } style={ { width: "100%" } }>
          <ButtonText>{ i18n.t("go_back") }</ButtonText>
        </Button>
      </Page>
    </Container>
  );
};

export default TermsScreen;

const Container = styled.View`
  margin-top: 35px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Page = styled.View`
  padding: 0 25px;
  width: 100%;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-top: 30px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #aaa;
  font-weight: bold;
  height: 25px;
`;

const Links = styled.View`
  margin: 15px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinksTS = styled(Links)`
  justify-content: flex-start;
  align-items: flex-start;
`;

const TextContainerTS = styled.Text`
  font-size: 20px;
  width: 100%;
  text-align: justify;
`;

const Button = styled.TouchableOpacity`
  border-radius: 5px;
  margin-top: 30px;
  background-color: #dc4c18;
  padding: 12px 20px;
  width: 140px;
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
