// ── i18n TRANSLATIONS ──
const LANG = {
  en: {
    nav_main:'Main', nav_dashboard:'Dashboard', nav_diary:'Farm Diary',
    nav_commerce:'Commerce', nav_buy:'Buy Inputs', nav_sell:'Sell Produce', nav_storage:'Cold Storage',
    nav_finance:'Finance & Welfare', nav_credit:'Credit & Loans', nav_schemes:'Govt Schemes', nav_training:'Training',
    nav_community:'Community', nav_forum:'Forum', helplines:'Helplines',
    page_home:'Dashboard', page_buy:'Buy Inputs', page_sell:'Sell Produce', page_storage:'Cold Storage',
    page_credit:'Credit & Loans', page_schemes:'Govt Schemes', page_training:'Training', page_diary:'Farm Diary', page_forum:'Forum',
    home_greeting:'Welcome to your Dashboard', home_sub:'Set up your profile to get started.',
    profile_setup:'Set Up Your Profile', your_name:'Your Name', your_loc:'Village / District',
    name_ph:'e.g. Ramesh Kumar', loc_ph:'e.g. Dharwad, Karnataka', save_profile:'Save Profile',
    stat_income:'Income (entered)', stat_income_sub:'from your sell listings',
    stat_listings:'Active Listings', stat_listings_sub:'produce listed for sale',
    stat_diary:'Diary Entries', stat_diary_sub:'farm activities logged',
    stat_posts:'Forum Posts', stat_posts_sub:'shared with community',
    quick_actions:'Quick Actions',
    qa_list:'List Produce', qa_buy:'Buy Inputs', qa_diary:'Farm Diary', qa_schemes:'Schemes',
    recent_activity:'Recent Activity',
    empty_activity:'No activity yet. Start by adding a diary entry, listing produce, or posting in the forum.',
    buy_title:'Buy Inputs', buy_sub:'Add items you need. This is your shopping list.',
    buy_form_title:'Add Item to List', item_name:'Item Name', item_name_ph:'e.g. DAP Fertiliser',
    category:'Category', qty_unit:'Quantity & Unit', qty_unit_ph:'e.g. 50 kg',
    est_price:'Estimated Price (₹)', est_price_ph:'e.g. 1350', add_item:'Add to List',
    my_input_list:'My Input List', empty_buy:'Your input list is empty. Add items you need to buy above.',
    sell_title:'Sell Produce', sell_sub:'List your harvest for direct sale to buyers nearby. No middlemen.',
    new_listing:'New Listing', produce_name:'Produce Name', produce_name_ph:'e.g. Fresh Tomatoes',
    qty_kg:'Quantity (kg)', price_kg:'Price per kg (₹)', harvest_date:'Harvest Date',
    description:'Description (optional)', desc_ph:'Freshly harvested, organic, any quality notes...',
    post_listing:'Post Listing', active_listings:'Your Active Listings',
    empty_sell:'No listings yet. Post your first produce listing above.',
    storage_title:'Cold Storage', storage_sub:'Add nearby cold storage facilities you know about.',
    map_soon:'Map view — coming soon', add_storage:'Add Storage Facility',
    facility_name:'Facility Name', facility_ph:'e.g. Karnataka Cold Chain',
    distance:'Distance', dist_ph:'e.g. 2.4 km away',
    contact:'Contact / Phone', contact_ph:'e.g. 9876543210',
    capacity:'Capacity / Notes', cap_ph:'e.g. 10 tonnes available',
    save_facility:'Save Facility', saved_facilities:'Saved Facilities',
    empty_storage:'No facilities saved. Add a nearby cold storage above.',
    credit_title:'Credit & Loans', credit_sub:'Track your loan applications and repayments.',
    add_loan:'Add Loan / Application', loan_purpose:'Loan Purpose', loan_purpose_ph:'e.g. Kharif seed purchase',
    amount:'Amount (₹)', amount_ph:'e.g. 20000', lender:'Lender / Source', lender_ph:'e.g. SBI, Cooperative Bank',
    status:'Status', loan_notes:'Notes (interest rate, tenure, EMI date etc.)',
    loan_notes_ph:'e.g. 8% p.a., 12 months, EMI due 5th of every month...',
    save_loan:'Save Loan', your_loans:'Your Loans', empty_loans:'No loans added yet.',
    schemes_title:'Government Schemes', schemes_sub:"Track schemes you've applied for or want to apply for.",
    key_schemes:'Key Schemes for Small Farmers',
    key_schemes_list:'PM-KISAN · PM Fasal Bima Yojana · Kisan Credit Card · RKVY · State-level subsidies',
    track_scheme:'Track a Scheme', scheme_name:'Scheme Name', scheme_name_ph:'e.g. PM-KISAN',
    benefit:'Benefit Amount', benefit_ph:'e.g. ₹6,000/year',
    applied_on:'Applied On', scheme_notes:'Notes', scheme_notes_ph:'Documents needed, follow-up required, etc.',
    save_scheme:'Save', my_schemes:'My Schemes', empty_schemes:'No schemes tracked yet.',
    training_title:'Training & Expert Support', training_sub:'Save links to training videos and expert resources.',
    save_resource:'Save a Resource', title_label:'Title', title_ph:'e.g. Tomato Cultivation Guide',
    link_source:'Link / Source (optional)', link_ph:'e.g. YouTube link or expert name',
    notes:'Notes', notes_ph:'Key takeaways, things to try...',
    save_res_btn:'Save Resource', saved_resources:'Saved Resources', empty_training:'No resources saved yet.',
    diary_title:'Farm Diary', diary_sub:'Log your daily farm activities, inputs and observations.',
    new_entry:'New Entry', activity:'Activity', activity_ph:'e.g. Sowed wheat in Field A',
    date:'Date', crop:'Crop', crop_ph:'e.g. Wheat, Tomato, Paddy', tag_label:'Tag',
    diary_notes_ph:'Inputs used, weather, yield, observations...',
    save_entry:'Save Entry', all_entries:'All Entries', empty_diary:'No entries yet. Log your first farm activity above.',
    forum_title:'Farmer Forum', forum_sub:'Share questions, tips, and updates with the farming community.',
    new_post:'New Post', post_title:'Title', post_title_ph:'e.g. Yellowing leaves on tomato crop — any advice?',
    message:'Message', message_ph:'Describe your question or share what you know...',
    post_btn:'Post', empty_forum:'No posts yet. Share something with the community above.',
    helpline_title:'Helplines & Support', helpline_sub:'You are not alone. Reach out anytime — calls are free and confidential.',
    close:'Close',
    bn_home:'Home', bn_sell:'Sell', bn_diary:'Diary', bn_forum:'Forum', bn_more:'More',
    ph_eg50:'e.g. 50', ph_eg25:'e.g. 25',
    delete_btn:'Delete', remove_btn:'Remove',
    empty_hint:'↑ Fill the form above to add your first entry',
    open_link:'Open Link', my_farm:'My Farm',
    toast_item_added:'Item added!', toast_item_name:'Please enter item name',
    toast_facility_name:'Please enter facility name', toast_facility_saved:'Facility saved!',
    toast_loan_fill:'Please enter purpose and amount', toast_loan_saved:'Loan saved!',
    toast_scheme_name:'Please enter scheme name', toast_scheme_saved:'Saved!',
    toast_train_title:'Please enter a title', toast_train_saved:'Resource saved!',
    toast_forum_fill:'Please enter a title and message', toast_forum_saved:'Posted!',
    toast_sell_fill:'Please fill name, quantity, and price', toast_sell_saved:'Listing posted!',
    toast_diary_fill:'Please enter activity and date', toast_diary_saved:'Entry saved!',
    toast_profile_name:'Please enter your name', toast_profile_saved:'Profile saved!',
    toast_deleted:'Deleted.', helpful_btn:'Helpful',
    lang_switched:'Switched to English ✓',
    select:'Select', opt_seeds:'Seeds', opt_fert:'Fertiliser', opt_pest:'Pesticide',
    opt_tools:'Tools', opt_mach:'Machinery', opt_other:'Other',
    opt_crop_mgmt:'Crop Management', opt_pest_ctrl:'Pest Control', opt_irr:'Irrigation',
    opt_postharvest:'Post-Harvest', opt_finance:'Finance',
    loan_applied:'Applied', loan_approved:'Approved', loan_active:'Active', loan_repaid:'Repaid',
    status_want:'Want to Apply', status_applied:'Applied', status_docs:'Documents Submitted',
    status_approved:'Approved', status_rejected:'Rejected', status_received:'Received Benefit',
    tag_general:'General', tag_sowing:'Sowing', tag_harvest:'Harvest', tag_pest:'Pest Alert',
    tag_irrigation:'Irrigation', tag_fertiliser:'Fertiliser', tag_other:'Other',
    tag_market:'Market Rates', tag_weather:'Weather', tag_tip:'Tip', tag_help:'Help Needed',
    profile_page_title:'My Profile', profile_page_sub:'Your account details and farm information.',
    edit_details:'Edit Details', account_lbl:'Account',
    full_name:'Full Name', mobile_lbl:'Mobile', village_lbl:'Village / Town',
    district_lbl:'District', state_lbl:'State', land_lbl:'Land Holding (acres)', primary_crop_lbl:'Primary Crop',
    edit_name_ph:'e.g. Ramesh Kumar', edit_village_ph:'e.g. Dharwad',
    edit_district_ph:'e.g. Dharwad', edit_state_ph:'e.g. Karnataka',
    save_changes:'Save Changes', change_language:'Change Language', sign_out:'Sign Out',
    hl_icall:'iCall — Mental Health', hl_icall_sub:'Mon–Sat 8am–10pm',
    hl_kiran:'KIRAN — Crisis Support', hl_kiran_sub:'24/7 · Free · Multilingual',
    hl_kcc:'Kisan Call Centre', hl_kcc_sub:'Agricultural expert advice · Free',
    hl_pmk:'PM-KISAN Helpline', hl_pmk_sub:'Scheme queries & support',
  },
  hi: {
    nav_main:'मुख्य', nav_dashboard:'डैशबोर्ड', nav_diary:'खेत डायरी',
    nav_commerce:'व्यापार', nav_buy:'सामान खरीदें', nav_sell:'फसल बेचें', nav_storage:'शीतगृह',
    nav_finance:'वित्त और कल्याण', nav_credit:'ऋण और कर्ज', nav_schemes:'सरकारी योजनाएं', nav_training:'प्रशिक्षण',
    nav_community:'समुदाय', nav_forum:'किसान फोरम', helplines:'हेल्पलाइन',
    page_home:'डैशबोर्ड', page_buy:'सामान खरीदें', page_sell:'फसल बेचें', page_storage:'शीतगृह',
    page_credit:'ऋण और कर्ज', page_schemes:'सरकारी योजनाएं', page_training:'प्रशिक्षण', page_diary:'खेत डायरी', page_forum:'किसान फोरम',
    home_greeting:'आपके डैशबोर्ड में आपका स्वागत है', home_sub:'शुरू करने के लिए अपनी प्रोफ़ाइल बनाएं।',
    profile_setup:'अपनी प्रोफ़ाइल बनाएं', your_name:'आपका नाम', your_loc:'गाँव / जिला',
    name_ph:'जैसे: रमेश कुमार', loc_ph:'जैसे: धारवाड़, कर्नाटक', save_profile:'प्रोफ़ाइल सहेजें',
    stat_income:'आय (दर्ज की गई)', stat_income_sub:'आपकी बिक्री सूची से',
    stat_listings:'सक्रिय सूचियाँ', stat_listings_sub:'बिक्री के लिए दर्ज फसल',
    stat_diary:'डायरी प्रविष्टियाँ', stat_diary_sub:'खेत गतिविधियाँ दर्ज',
    stat_posts:'फोरम पोस्ट', stat_posts_sub:'समुदाय के साथ साझा',
    quick_actions:'त्वरित कार्य',
    qa_list:'फसल सूचीबद्ध करें', qa_buy:'सामान खरीदें', qa_diary:'खेत डायरी', qa_schemes:'योजनाएं',
    recent_activity:'हाल की गतिविधि',
    empty_activity:'अभी तक कोई गतिविधि नहीं। डायरी प्रविष्टि, फसल सूची या फोरम पोस्ट से शुरू करें।',
    buy_title:'सामान खरीदें', buy_sub:'अपनी जरूरत की चीजें जोड़ें। यह आपकी खरीद सूची है।',
    buy_form_title:'सूची में जोड़ें', item_name:'वस्तु का नाम', item_name_ph:'जैसे: DAP खाद',
    category:'श्रेणी', qty_unit:'मात्रा और इकाई', qty_unit_ph:'जैसे: 50 किलो',
    est_price:'अनुमानित मूल्य (₹)', est_price_ph:'जैसे: 1350', add_item:'सूची में जोड़ें',
    my_input_list:'मेरी खरीद सूची', empty_buy:'खरीद सूची खाली है। ऊपर आइटम जोड़ें।',
    sell_title:'फसल बेचें', sell_sub:'अपनी फसल सीधे खरीदारों को बेचें। कोई बिचौलिया नहीं।',
    new_listing:'नई सूची', produce_name:'फसल का नाम', produce_name_ph:'जैसे: ताजे टमाटर',
    qty_kg:'मात्रा (किलो)', price_kg:'मूल्य प्रति किलो (₹)', harvest_date:'कटाई की तारीख',
    description:'विवरण (वैकल्पिक)', desc_ph:'ताजा कटाई, जैविक, गुणवत्ता नोट...',
    post_listing:'सूची पोस्ट करें', active_listings:'आपकी सक्रिय सूचियाँ',
    empty_sell:'अभी कोई सूची नहीं। पहली फसल सूची ऊपर पोस्ट करें।',
    storage_title:'शीतगृह', storage_sub:'पास के शीतगृह की जानकारी जोड़ें।',
    map_soon:'मानचित्र — जल्द आएगा', add_storage:'शीतगृह जोड़ें',
    facility_name:'सुविधा का नाम', facility_ph:'जैसे: कर्नाटक कोल्ड चेन',
    distance:'दूरी', dist_ph:'जैसे: 2.4 किमी दूर',
    contact:'संपर्क / फ़ोन', contact_ph:'जैसे: 9876543210',
    capacity:'क्षमता / नोट', cap_ph:'जैसे: 10 टन उपलब्ध',
    save_facility:'शीतगृह सहेजें', saved_facilities:'सहेजे गए शीतगृह',
    empty_storage:'कोई शीतगृह सहेजा नहीं। ऊपर जोड़ें।',
    credit_title:'ऋण और कर्ज', credit_sub:'अपने ऋण आवेदनों और भुगतान को ट्रैक करें।',
    add_loan:'ऋण / आवेदन जोड़ें', loan_purpose:'ऋण का उद्देश्य', loan_purpose_ph:'जैसे: खरीफ बीज खरीद',
    amount:'राशि (₹)', amount_ph:'जैसे: 20000', lender:'ऋणदाता / स्रोत', lender_ph:'जैसे: SBI, सहकारी बैंक',
    status:'स्थिति', loan_notes:'नोट्स (ब्याज दर, अवधि, EMI तारीख आदि)',
    loan_notes_ph:'जैसे: 8% प्रति वर्ष, 12 महीने, हर 5 तारीख को EMI...',
    save_loan:'ऋण सहेजें', your_loans:'आपके ऋण', empty_loans:'अभी कोई ऋण नहीं जोड़ा।',
    schemes_title:'सरकारी योजनाएं', schemes_sub:'जिन योजनाओं के लिए आवेदन किया या करना है उन्हें ट्रैक करें।',
    key_schemes:'छोटे किसानों के लिए प्रमुख योजनाएं',
    key_schemes_list:'PM-KISAN · PM फसल बीमा योजना · किसान क्रेडिट कार्ड · RKVY · राज्य सब्सिडी',
    track_scheme:'योजना ट्रैक करें', scheme_name:'योजना का नाम', scheme_name_ph:'जैसे: PM-KISAN',
    benefit:'लाभ राशि', benefit_ph:'जैसे: ₹6,000/वर्ष',
    applied_on:'आवेदन तारीख', scheme_notes:'नोट्स', scheme_notes_ph:'जरूरी दस्तावेज़, फॉलो-अप आदि।',
    save_scheme:'सहेजें', my_schemes:'मेरी योजनाएं', empty_schemes:'कोई योजना ट्रैक नहीं की।',
    training_title:'प्रशिक्षण और विशेषज्ञ सहायता', training_sub:'प्रशिक्षण वीडियो और संसाधन लिंक सहेजें।',
    save_resource:'संसाधन सहेजें', title_label:'शीर्षक', title_ph:'जैसे: टमाटर उत्पादन गाइड',
    link_source:'लिंक / स्रोत (वैकल्पिक)', link_ph:'जैसे: YouTube लिंक या विशेषज्ञ का नाम',
    notes:'नोट्स', notes_ph:'मुख्य बातें, जो आजमानी हैं...',
    save_res_btn:'संसाधन सहेजें', saved_resources:'सहेजे गए संसाधन', empty_training:'अभी कोई संसाधन नहीं।',
    diary_title:'खेत डायरी', diary_sub:'रोजाना की खेत गतिविधियाँ, सामग्री और टिप्पणियाँ दर्ज करें।',
    new_entry:'नई प्रविष्टि', activity:'गतिविधि', activity_ph:'जैसे: खेत A में गेहूं बोया',
    date:'तारीख', crop:'फसल', crop_ph:'जैसे: गेहूं, टमाटर, धान', tag_label:'टैग',
    diary_notes_ph:'सामग्री, मौसम, उत्पाद, टिप्पणियाँ...',
    save_entry:'प्रविष्टि सहेजें', all_entries:'सभी प्रविष्टियाँ', empty_diary:'अभी कोई प्रविष्टि नहीं। ऊपर पहली गतिविधि जोड़ें।',
    forum_title:'किसान फोरम', forum_sub:'समुदाय के साथ सवाल, सुझाव और अपडेट साझा करें।',
    new_post:'नई पोस्ट', post_title:'शीर्षक', post_title_ph:'जैसे: टमाटर की पत्तियाँ पीली हो रही हैं — कोई सुझाव?',
    message:'संदेश', message_ph:'अपना सवाल लिखें या कुछ उपयोगी साझा करें...',
    post_btn:'पोस्ट करें', empty_forum:'अभी कोई पोस्ट नहीं। समुदाय के साथ कुछ साझा करें।',
    helpline_title:'हेल्पलाइन और सहायता', helpline_sub:'आप अकेले नहीं हैं। कभी भी संपर्क करें — कॉल मुफ्त और गोपनीय है।',
    close:'बंद करें',
    bn_home:'होम', bn_sell:'बेचें', bn_diary:'डायरी', bn_forum:'फोरम', bn_more:'और',
    ph_eg50:'जैसे: 50', ph_eg25:'जैसे: 25',
    delete_btn:'हटाएं', remove_btn:'हटाएं',
    empty_hint:'↑ पहली प्रविष्टि के लिए ऊपर फॉर्म भरें',
    open_link:'लिंक खोलें', my_farm:'मेरा खेत',
    toast_item_added:'जोड़ा गया!', toast_item_name:'कृपया वस्तु का नाम डालें',
    toast_facility_name:'कृपया सुविधा का नाम डालें', toast_facility_saved:'शीतगृह सहेजा गया!',
    toast_loan_fill:'कृपया उद्देश्य और राशि डालें', toast_loan_saved:'ऋण सहेजा गया!',
    toast_scheme_name:'कृपया योजना का नाम डालें', toast_scheme_saved:'सहेजा गया!',
    toast_train_title:'कृपया शीर्षक डालें', toast_train_saved:'संसाधन सहेजा गया!',
    toast_forum_fill:'कृपया शीर्षक और संदेश डालें', toast_forum_saved:'पोस्ट हो गया!',
    toast_sell_fill:'कृपया नाम, मात्रा और मूल्य भरें', toast_sell_saved:'सूची पोस्ट हो गई!',
    toast_diary_fill:'कृपया गतिविधि और तारीख डालें', toast_diary_saved:'प्रविष्टि सहेजी गई!',
    toast_profile_name:'कृपया अपना नाम डालें', toast_profile_saved:'प्रोफ़ाइल सहेजी गई!',
    toast_deleted:'हटाया गया।', helpful_btn:'उपयोगी',
    lang_switched:'हिंदी में बदला गया ✓',
    select:'चुनें', opt_seeds:'बीज', opt_fert:'खाद', opt_pest:'कीटनाशक',
    opt_tools:'उपकरण', opt_mach:'मशीनरी', opt_other:'अन्य',
    opt_crop_mgmt:'फसल प्रबंधन', opt_pest_ctrl:'कीट नियंत्रण', opt_irr:'सिंचाई',
    opt_postharvest:'कटाई के बाद', opt_finance:'वित्त',
    loan_applied:'आवेदन किया', loan_approved:'स्वीकृत', loan_active:'सक्रिय', loan_repaid:'चुका दिया',
    status_want:'आवेदन करना है', status_applied:'आवेदन किया', status_docs:'दस्तावेज़ जमा',
    status_approved:'स्वीकृत', status_rejected:'अस्वीकृत', status_received:'लाभ मिला',
    tag_general:'सामान्य', tag_sowing:'बुवाई', tag_harvest:'कटाई', tag_pest:'कीट चेतावनी',
    tag_irrigation:'सिंचाई', tag_fertiliser:'खाद', tag_other:'अन्य',
    tag_market:'मंडी भाव', tag_weather:'मौसम', tag_tip:'सुझाव', tag_help:'मदद चाहिए',
    profile_page_title:'मेरी प्रोफ़ाइल', profile_page_sub:'आपके खाते और खेत की जानकारी।',
    edit_details:'विवरण संपादित करें', account_lbl:'खाता',
    full_name:'पूरा नाम', mobile_lbl:'मोबाइल', village_lbl:'गाँव / शहर',
    district_lbl:'जिला', state_lbl:'राज्य', land_lbl:'भूमि (एकड़)', primary_crop_lbl:'मुख्य फसल',
    edit_name_ph:'जैसे: रमेश कुमार', edit_village_ph:'जैसे: धारवाड़',
    edit_district_ph:'जैसे: धारवाड़', edit_state_ph:'जैसे: कर्नाटक',
    save_changes:'परिवर्तन सहेजें', change_language:'भाषा बदलें', sign_out:'साइन आउट',
    hl_icall:'iCall — मानसिक स्वास्थ्य', hl_icall_sub:'सोम–शनि सुबह 8 – रात 10',
    hl_kiran:'KIRAN — संकट सहायता', hl_kiran_sub:'24/7 · मुफ्त · बहुभाषी',
    hl_kcc:'किसान कॉल सेंटर', hl_kcc_sub:'कृषि विशेषज्ञ सलाह · मुफ्त',
    hl_pmk:'PM-KISAN हेल्पलाइन', hl_pmk_sub:'योजना संबंधी जानकारी',
  },
  mr:{nav_main:'मुख्य',nav_dashboard:'डॅशबोर्ड',nav_diary:'शेत डायरी',nav_commerce:'व्यापार',nav_buy:'साहित्य खरेदी',nav_sell:'पीक विक्री',nav_storage:'शीतगृह',nav_finance:'वित्त आणि कल्याण',nav_credit:'कर्ज',nav_schemes:'सरकारी योजना',nav_training:'प्रशिक्षण',nav_community:'समुदाय',nav_forum:'शेतकरी फोरम',helplines:'हेल्पलाइन',page_home:'डॅशबोर्ड',page_buy:'साहित्य खरेदी',page_sell:'पीक विक्री',page_storage:'शीतगृह',page_credit:'कर्ज',page_schemes:'सरकारी योजना',page_training:'प्रशिक्षण',page_diary:'शेत डायरी',page_forum:'शेतकरी फोरम',home_greeting:'आपल्या डॅशबोर्डवर स्वागत',home_sub:'सुरू करण्यासाठी प्रोफाइल तयार करा.',profile_setup:'प्रोफाइल तयार करा',your_name:'तुमचे नाव',your_loc:'गाव / जिल्हा',name_ph:'उदा. रमेश कुमार',loc_ph:'उदा. पुणे, महाराष्ट्र',save_profile:'प्रोफाइल जतन करा',stat_income:'उत्पन्न (नोंदवलेले)',stat_income_sub:'विक्री यादीतून',stat_listings:'सक्रिय याद्या',stat_listings_sub:'विक्रीसाठी पीक',stat_diary:'डायरी नोंदी',stat_diary_sub:'शेत क्रिया नोंदवल्या',stat_posts:'फोरम पोस्ट',stat_posts_sub:'समुदायाशी शेअर',quick_actions:'जलद कृती',qa_list:'पीक यादी करा',qa_buy:'साहित्य खरेदी',qa_diary:'शेत डायरी',qa_schemes:'योजना',recent_activity:'अलीकडील क्रिया',empty_activity:'अद्याप कोणतीही क्रिया नाही.',buy_title:'साहित्य खरेदी',buy_sub:'आपल्या गरजेच्या वस्तू जोडा.',buy_form_title:'यादीत जोडा',item_name:'वस्तूचे नाव',item_name_ph:'उदा. DAP खत',category:'श्रेणी',qty_unit:'प्रमाण आणि एकक',qty_unit_ph:'उदा. ५० किलो',est_price:'अंदाजे किंमत (₹)',est_price_ph:'उदा. 1350',add_item:'यादीत जोडा',my_input_list:'माझी खरेदी यादी',empty_buy:'खरेदी यादी रिकामी आहे.',sell_title:'पीक विक्री',sell_sub:'थेट खरेदीदारांना पीक विका.',new_listing:'नवीन यादी',produce_name:'पिकाचे नाव',produce_name_ph:'उदा. ताजे टोमॅटो',qty_kg:'प्रमाण (किलो)',price_kg:'किंमत प्रति किलो (₹)',harvest_date:'कापणीची तारीख',description:'वर्णन (पर्यायी)',desc_ph:'ताजे काढलेले, सेंद्रिय...',post_listing:'यादी पोस्ट करा',active_listings:'तुमच्या सक्रिय याद्या',empty_sell:'अद्याप कोणतीही यादी नाही.',storage_title:'शीतगृह',storage_sub:'जवळच्या शीतगृहाची माहिती जोडा.',map_soon:'नकाशा — लवकरच येईल',add_storage:'शीतगृह जोडा',facility_name:'सुविधेचे नाव',facility_ph:'उदा. महाराष्ट्र कोल्ड चेन',distance:'अंतर',dist_ph:'उदा. २.४ किमी दूर',contact:'संपर्क / फोन',contact_ph:'उदा. ९८७६५४३२१०',capacity:'क्षमता / नोट',cap_ph:'उदा. १० टन उपलब्ध',save_facility:'शीतगृह जतन करा',saved_facilities:'जतन केलेली शीतगृहे',empty_storage:'कोणतेही शीतगृह जतन नाही.',credit_title:'कर्ज',credit_sub:'कर्ज अर्ज आणि परतफेड ट्रॅक करा.',add_loan:'कर्ज / अर्ज जोडा',loan_purpose:'कर्जाचा उद्देश',loan_purpose_ph:'उदा. खरीप बियाणे खरेदी',amount:'रक्कम (₹)',amount_ph:'उदा. 20000',lender:'सावकार / स्रोत',lender_ph:'उदा. SBI, सहकारी बँक',status:'स्थिती',loan_notes:'नोट्स',loan_notes_ph:'व्याजदर, कालावधी, EMI तारीख...',save_loan:'कर्ज जतन करा',your_loans:'तुमची कर्जे',empty_loans:'अद्याप कोणतेही कर्ज नाही.',schemes_title:'सरकारी योजना',schemes_sub:'अर्ज केलेल्या किंवा करायच्या योजना ट्रॅक करा.',key_schemes:'छोट्या शेतकऱ्यांसाठी प्रमुख योजना',key_schemes_list:'PM-KISAN · PM पीक विमा योजना · किसान क्रेडिट कार्ड · RKVY · राज्य अनुदाने',track_scheme:'योजना ट्रॅक करा',scheme_name:'योजनेचे नाव',scheme_name_ph:'उदा. PM-KISAN',benefit:'लाभाची रक्कम',benefit_ph:'उदा. ₹6,000/वर्ष',applied_on:'अर्जाची तारीख',scheme_notes:'नोट्स',scheme_notes_ph:'आवश्यक कागदपत्रे इ.',save_scheme:'जतन करा',my_schemes:'माझ्या योजना',empty_schemes:'अद्याप कोणती योजना नोंदवली नाही.',training_title:'प्रशिक्षण आणि तज्ज्ञ मदत',training_sub:'प्रशिक्षण व्हिडिओ लिंक जतन करा.',save_resource:'संसाधन जतन करा',title_label:'शीर्षक',title_ph:'उदा. टोमॅटो लागवड मार्गदर्शक',link_source:'लिंक / स्रोत (पर्यायी)',link_ph:'उदा. YouTube लिंक',notes:'नोट्स',notes_ph:'मुख्य मुद्दे, वापरायचे उपाय...',save_res_btn:'संसाधन जतन करा',saved_resources:'जतन केलेली संसाधने',empty_training:'अद्याप कोणते संसाधन नाही.',diary_title:'शेत डायरी',diary_sub:'रोजच्या शेत क्रिया नोंदवा.',new_entry:'नवीन नोंद',activity:'क्रिया',activity_ph:'उदा. शेत A मध्ये गहू पेरला',date:'तारीख',crop:'पीक',crop_ph:'उदा. गहू, टोमॅटो, भात',tag_label:'टॅग',diary_notes_ph:'वापरलेले साहित्य, हवामान, उत्पादन...',save_entry:'नोंद जतन करा',all_entries:'सर्व नोंदी',empty_diary:'अद्याप कोणतीही नोंद नाही.',forum_title:'शेतकरी फोरम',forum_sub:'प्रश्न, सूचना आणि अपडेट शेअर करा.',new_post:'नवीन पोस्ट',post_title:'शीर्षक',post_title_ph:'उदा. टोमॅटोची पाने पिवळी होत आहेत — काही सुचवा?',message:'संदेश',message_ph:'तुमचा प्रश्न लिहा...',post_btn:'पोस्ट करा',empty_forum:'अद्याप कोणतीही पोस्ट नाही.',helpline_title:'हेल्पलाइन आणि मदत',helpline_sub:'तुम्ही एकटे नाही. कधीही संपर्क करा.',close:'बंद करा',bn_home:'मुख्यपृष्ठ',bn_sell:'विका',bn_diary:'डायरी',bn_forum:'फोरम',bn_more:'अधिक',ph_eg50:'उदा. ५०',ph_eg25:'उदा. २५',delete_btn:'हटवा',remove_btn:'हटवा',empty_hint:'↑ पहिली नोंद करण्यासाठी वरील फॉर्म भरा',open_link:'लिंक उघडा',my_farm:'माझे शेत',toast_item_added:'जोडले!',toast_item_name:'कृपया वस्तूचे नाव द्या',toast_facility_name:'कृपया सुविधेचे नाव द्या',toast_facility_saved:'शीतगृह जतन!',toast_loan_fill:'उद्देश आणि रक्कम द्या',toast_loan_saved:'कर्ज जतन!',toast_scheme_name:'योजनेचे नाव द्या',toast_scheme_saved:'जतन!',toast_train_title:'शीर्षक द्या',toast_train_saved:'संसाधन जतन!',toast_forum_fill:'शीर्षक आणि संदेश द्या',toast_forum_saved:'पोस्ट झाली!',toast_sell_fill:'नाव, प्रमाण आणि किंमत भरा',toast_sell_saved:'यादी पोस्ट झाली!',toast_diary_fill:'क्रिया आणि तारीख द्या',toast_diary_saved:'नोंद जतन!',toast_profile_name:'कृपया तुमचे नाव द्या',toast_profile_saved:'प्रोफाइल जतन!',toast_deleted:'हटवले.',helpful_btn:'उपयोगी',lang_switched:'मराठीत बदलले ✓',
    select:'निवडा', opt_seeds:'बियाणे', opt_fert:'खत', opt_pest:'कीटकनाशक',
    opt_tools:'साधने', opt_mach:'यंत्रसामग्री', opt_other:'इतर',
    opt_crop_mgmt:'पीक व्यवस्थापन', opt_pest_ctrl:'कीड नियंत्रण', opt_irr:'सिंचन',
    opt_postharvest:'कापणीनंतर', opt_finance:'वित्त',
    loan_applied:'अर्ज केला', loan_approved:'मंजूर', loan_active:'सक्रिय', loan_repaid:'परतफेड केली',
    status_want:'अर्ज करायचा आहे', status_applied:'अर्ज केला', status_docs:'कागदपत्रे जमा',
    status_approved:'मंजूर', status_rejected:'नाकारला', status_received:'लाभ मिळाला',
    tag_general:'सामान्य', tag_sowing:'पेरणी', tag_harvest:'कापणी', tag_pest:'कीड इशारा',
    tag_irrigation:'सिंचन', tag_fertiliser:'खत', tag_other:'इतर',
    tag_market:'बाजारभाव', tag_weather:'हवामान', tag_tip:'सूचना', tag_help:'मदत हवी',
    profile_page_title:'माझे प्रोफाइल', profile_page_sub:'तुमच्या खाते आणि शेताची माहिती.',
    edit_details:'तपशील संपादित करा', account_lbl:'खाते',
    full_name:'पूर्ण नाव', mobile_lbl:'मोबाइल', village_lbl:'गाव / शहर',
    district_lbl:'जिल्हा', state_lbl:'राज्य', land_lbl:'जमीन (एकर)', primary_crop_lbl:'मुख्य पीक',
    edit_name_ph:'उदा. रमेश कुमार', edit_village_ph:'उदा. धारवाड',
    edit_district_ph:'उदा. धारवाड', edit_state_ph:'उदा. महाराष्ट्र',
    save_changes:'बदल जतन करा', change_language:'भाषा बदला', sign_out:'साइन आउट',
    hl_icall:'iCall — मानसिक आरोग्य', hl_icall_sub:'सोम–शनि सकाळी 8 – रात्री 10',
    hl_kiran:'KIRAN — संकट सहाय्य', hl_kiran_sub:'24/7 · मोफत · बहुभाषिक',
    hl_kcc:'किसान कॉल सेंटर', hl_kcc_sub:'कृषी तज्ज्ञ सल्ला · मोफत',
    hl_pmk:'PM-KISAN हेल्पलाइन', hl_pmk_sub:'योजनाबाबत माहिती',
  },
  ta:{nav_main:'முதன்மை',nav_dashboard:'டாஷ்போர்டு',nav_diary:'வயல் நாட்குறிப்பு',nav_commerce:'வணிகம்',nav_buy:'உள்ளீடுகள் வாங்கு',nav_sell:'விளைபொருள் விற்று',nav_storage:'குளிர்கிடங்கு',nav_finance:'நிதி & நலன்',nav_credit:'கடன்',nav_schemes:'அரசு திட்டங்கள்',nav_training:'பயிற்சி',nav_community:'சமுதாயம்',nav_forum:'விவசாயி மன்றம்',helplines:'உதவி எண்கள்',page_home:'டாஷ்போர்டு',page_buy:'உள்ளீடுகள் வாங்கு',page_sell:'விளைபொருள் விற்று',page_storage:'குளிர்கிடங்கு',page_credit:'கடன்',page_schemes:'அரசு திட்டங்கள்',page_training:'பயிற்சி',page_diary:'வயல் நாட்குறிப்பு',page_forum:'விவசாயி மன்றம்',home_greeting:'உங்கள் டாஷ்போர்டுக்கு வரவேற்கிறோம்',home_sub:'தொடங்க உங்கள் சுயவிவரத்தை அமையுங்கள்.',profile_setup:'சுயவிவரம் அமை',your_name:'உங்கள் பெயர்',your_loc:'கிராமம் / மாவட்டம்',name_ph:'எ.கா. ரமேஷ் குமார்',loc_ph:'எ.கா. கோயம்புத்தூர், தமிழ்நாடு',save_profile:'சுயவிவரம் சேமி',stat_income:'வருமானம்',stat_income_sub:'விற்பனை பட்டியலிலிருந்து',stat_listings:'செயல்திட்டங்கள்',stat_listings_sub:'விற்பனைக்கு பட்டியலிட்டவை',stat_diary:'நாட்குறிப்பு பதிவுகள்',stat_diary_sub:'வயல் செயல்பாடுகள்',stat_posts:'மன்ற இடுகைகள்',stat_posts_sub:'சமுதாயத்துடன் பகிர்ந்தவை',quick_actions:'விரைவு செயல்கள்',qa_list:'விளைபொருள் பட்டியலிடு',qa_buy:'உள்ளீடுகள் வாங்கு',qa_diary:'வயல் நாட்குறிப்பு',qa_schemes:'திட்டங்கள்',recent_activity:'சமீபத்திய செயல்பாடு',empty_activity:'இன்னும் செயல்பாடு இல்லை.',buy_title:'உள்ளீடுகள் வாங்கு',buy_sub:'உங்கள் தேவையான பொருட்களை சேர்க்கவும்.',buy_form_title:'பட்டியலில் சேர்',item_name:'பொருளின் பெயர்',item_name_ph:'எ.கா. DAP உரம்',category:'வகை',qty_unit:'அளவு & அலகு',qty_unit_ph:'எ.கா. 50 கிலோ',est_price:'மதிப்பீட்டு விலை (₹)',est_price_ph:'எ.கா. 1350',add_item:'பட்டியலில் சேர்',my_input_list:'என் கொள்முதல் பட்டியல்',empty_buy:'கொள்முதல் பட்டியல் காலியாக உள்ளது.',sell_title:'விளைபொருள் விற்று',sell_sub:'நேரடியாக வாங்குபவர்களுக்கு விற்கவும்.',new_listing:'புதிய பட்டியல்',produce_name:'விளைபொருளின் பெயர்',produce_name_ph:'எ.கா. தக்காளி',qty_kg:'அளவு (கிலோ)',price_kg:'விலை ஒரு கிலோ (₹)',harvest_date:'அறுவடை தேதி',description:'விளக்கம் (விருப்பம்)',desc_ph:'புதிதாக அறுவடை செய்தது, இயற்கை...',post_listing:'பட்டியல் இடு',active_listings:'உங்கள் செயல்திட்டங்கள்',empty_sell:'இன்னும் பட்டியல் இல்லை.',storage_title:'குளிர்கிடங்கு',storage_sub:'அருகில் உள்ள குளிர்கிடங்கு தகவல் சேர்க்கவும்.',map_soon:'வரைபடம் — விரைவில் வரும்',add_storage:'குளிர்கிடங்கு சேர்',facility_name:'வசதியின் பெயர்',facility_ph:'எ.கா. தமிழ்நாடு கோல்ட் சேன்',distance:'தூரம்',dist_ph:'எ.கா. 2.4 கி.மீ தூரம்',contact:'தொடர்பு / தொலைபேசி',contact_ph:'எ.கா. 9876543210',capacity:'கொள்ளளவு / குறிப்பு',cap_ph:'எ.கா. 10 டன் கிடைக்கும்',save_facility:'குளிர்கிடங்கு சேமி',saved_facilities:'சேமித்த குளிர்கிடங்குகள்',empty_storage:'எந்த குளிர்கிடங்கும் சேமிக்கப்படவில்லை.',credit_title:'கடன்',credit_sub:'கடன் விண்ணப்பங்களை கண்காணிக்கவும்.',add_loan:'கடன் / விண்ணப்பம் சேர்',loan_purpose:'கடனின் நோக்கம்',loan_purpose_ph:'எ.கா. கோடை விதை கொள்முதல்',amount:'தொகை (₹)',amount_ph:'எ.கா. 20000',lender:'கடன் தரும் நிறுவனம்',lender_ph:'எ.கா. SBI, கூட்டுறவு வங்கி',status:'நிலை',loan_notes:'குறிப்புகள்',loan_notes_ph:'வட்டி விகிதம், காலம், EMI தேதி...',save_loan:'கடன் சேமி',your_loans:'உங்கள் கடன்கள்',empty_loans:'இன்னும் கடன் சேர்க்கப்படவில்லை.',schemes_title:'அரசு திட்டங்கள்',schemes_sub:'விண்ணப்பித்த திட்டங்களை கண்காணிக்கவும்.',key_schemes:'சிறு விவசாயிகளுக்கான முக்கிய திட்டங்கள்',key_schemes_list:'PM-KISAN · PM பயிர் காப்பீடு · கிசான் கிரெடிட் கார்டு · RKVY',track_scheme:'திட்டம் கண்காணி',scheme_name:'திட்டத்தின் பெயர்',scheme_name_ph:'எ.கா. PM-KISAN',benefit:'பலன் தொகை',benefit_ph:'எ.கா. ₹6,000/ஆண்டு',applied_on:'விண்ணப்பித்த தேதி',scheme_notes:'குறிப்புகள்',scheme_notes_ph:'தேவையான ஆவணங்கள்...',save_scheme:'சேமி',my_schemes:'என் திட்டங்கள்',empty_schemes:'இன்னும் திட்டங்கள் சேர்க்கப்படவில்லை.',training_title:'பயிற்சி & நிபுணர் உதவி',training_sub:'பயிற்சி வீடியோ இணைப்புகளை சேமிக்கவும்.',save_resource:'வளம் சேமி',title_label:'தலைப்பு',title_ph:'எ.கா. தக்காளி சாகுபடி வழிகாட்டி',link_source:'இணைப்பு / மூலம் (விருப்பம்)',link_ph:'எ.கா. YouTube இணைப்பு',notes:'குறிப்புகள்',notes_ph:'முக்கிய கற்றல்கள்...',save_res_btn:'வளம் சேமி',saved_resources:'சேமித்த வளங்கள்',empty_training:'இன்னும் வளங்கள் இல்லை.',diary_title:'வயல் நாட்குறிப்பு',diary_sub:'தினசரி வயல் செயல்பாடுகளை பதிவு செய்யுங்கள்.',new_entry:'புதிய பதிவு',activity:'செயல்பாடு',activity_ph:'எ.கா. வயல் A-ல் கோதுமை விதைத்தேன்',date:'தேதி',crop:'பயிர்',crop_ph:'எ.கா. கோதுமை, தக்காளி, நெல்',tag_label:'குறிச்சொல்',diary_notes_ph:'பயன்படுத்திய பொருட்கள், வானிலை, விளைச்சல்...',save_entry:'பதிவு சேமி',all_entries:'அனைத்து பதிவுகள்',empty_diary:'இன்னும் பதிவுகள் இல்லை.',forum_title:'விவசாயி மன்றம்',forum_sub:'கேள்விகள், குறிப்புகள் பகிரவும்.',new_post:'புதிய இடுகை',post_title:'தலைப்பு',post_title_ph:'எ.கா. தக்காளி இலைகள் மஞ்சளாகின்றன — யோசனை?',message:'செய்தி',message_ph:'உங்கள் கேள்வியை எழுதுங்கள்...',post_btn:'இடுகையிடு',empty_forum:'இன்னும் இடுகைகள் இல்லை.',helpline_title:'உதவி எண்கள் & ஆதரவு',helpline_sub:'நீங்கள் தனியில்லை. எந்நேரமும் தொடர்பு கொள்ளுங்கள்.',close:'மூடு',bn_home:'முகப்பு',bn_sell:'விற்கு',bn_diary:'நாட்குறிப்பு',bn_forum:'மன்றம்',bn_more:'மேலும்',ph_eg50:'எ.கா. 50',ph_eg25:'எ.கா. 25',delete_btn:'நீக்கு',remove_btn:'நீக்கு',empty_hint:'↑ முதல் பதிவுக்கு மேலே படிவம் நிரப்பவும்',open_link:'இணைப்பு திற',my_farm:'என் வயல்',toast_item_added:'சேர்க்கப்பட்டது!',toast_item_name:'பொருளின் பெயர் கொடுங்கள்',toast_facility_name:'வசதியின் பெயர் கொடுங்கள்',toast_facility_saved:'குளிர்கிடங்கு சேமிக்கப்பட்டது!',toast_loan_fill:'நோக்கம் மற்றும் தொகை கொடுங்கள்',toast_loan_saved:'கடன் சேமிக்கப்பட்டது!',toast_scheme_name:'திட்டத்தின் பெயர் கொடுங்கள்',toast_scheme_saved:'சேமிக்கப்பட்டது!',toast_train_title:'தலைப்பு கொடுங்கள்',toast_train_saved:'வளம் சேமிக்கப்பட்டது!',toast_forum_fill:'தலைப்பு மற்றும் செய்தி கொடுங்கள்',toast_forum_saved:'இடுகையிடப்பட்டது!',toast_sell_fill:'பெயர், அளவு, விலை நிரப்பவும்',toast_sell_saved:'பட்டியல் இடப்பட்டது!',toast_diary_fill:'செயல்பாடு மற்றும் தேதி கொடுங்கள்',toast_diary_saved:'பதிவு சேமிக்கப்பட்டது!',toast_profile_name:'உங்கள் பெயர் கொடுங்கள்',toast_profile_saved:'சுயவிவரம் சேமிக்கப்பட்டது!',toast_deleted:'நீக்கப்பட்டது.',helpful_btn:'உதவியாக',lang_switched:'தமிழில் மாற்றப்பட்டது ✓',
    select:'தேர்வு', opt_seeds:'விதைகள்', opt_fert:'உரம்', opt_pest:'பூச்சிக்கொல்லி',
    opt_tools:'கருவிகள்', opt_mach:'இயந்திரங்கள்', opt_other:'மற்றவை',
    opt_crop_mgmt:'பயிர் மேலாண்மை', opt_pest_ctrl:'பூச்சி கட்டுப்பாடு', opt_irr:'நீர்ப்பாசனம்',
    opt_postharvest:'அறுவடைக்கு பின்', opt_finance:'நிதி',
    loan_applied:'விண்ணப்பித்தது', loan_approved:'அங்கீகரிக்கப்பட்டது', loan_active:'செயலில்', loan_repaid:'திரும்பச் செலுத்தியது',
    status_want:'விண்ணப்பிக்க வேண்டும்', status_applied:'விண்ணப்பித்தது', status_docs:'ஆவணங்கள் சமர்ப்பித்தது',
    status_approved:'அங்கீகரிக்கப்பட்டது', status_rejected:'நிராகரிக்கப்பட்டது', status_received:'நலன் பெற்றது',
    tag_general:'பொது', tag_sowing:'விதைப்பு', tag_harvest:'அறுவடை', tag_pest:'பூச்சி எச்சரிக்கை',
    tag_irrigation:'நீர்ப்பாசனம்', tag_fertiliser:'உரம்', tag_other:'மற்றவை',
    tag_market:'சந்தை விலை', tag_weather:'வானிலை', tag_tip:'குறிப்பு', tag_help:'உதவி தேவை',
    profile_page_title:'என் சுயவிவரம்', profile_page_sub:'உங்கள் கணக்கு மற்றும் வயல் தகவல்.',
    edit_details:'விவரங்களை திருத்து', account_lbl:'கணக்கு',
    full_name:'முழு பெயர்', mobile_lbl:'மொபைல்', village_lbl:'கிராமம் / நகரம்',
    district_lbl:'மாவட்டம்', state_lbl:'மாநிலம்', land_lbl:'நிலம் (ஏக்கர்)', primary_crop_lbl:'முதன்மை பயிர்',
    edit_name_ph:'எ.கா. ரமேஷ் குமார்', edit_village_ph:'எ.கா. கோயம்புத்தூர்',
    edit_district_ph:'எ.கா. கோயம்புத்தூர்', edit_state_ph:'எ.கா. தமிழ்நாடு',
    save_changes:'மாற்றங்களை சேமி', change_language:'மொழி மாற்று', sign_out:'வெளியேறு',
    hl_icall:'iCall — மனநல ஆதரவு', hl_icall_sub:'திங்கள்–சனி காலை 8 – இரவு 10',
    hl_kiran:'KIRAN — நெருக்கடி ஆதரவு', hl_kiran_sub:'24/7 · இலவசம் · பலமொழி',
    hl_kcc:'கிசான் கால் சென்டர்', hl_kcc_sub:'விவசாய நிபுணர் ஆலோசனை · இலவசம்',
    hl_pmk:'PM-KISAN உதவி எண்', hl_pmk_sub:'திட்டம் தொடர்பான ஆதரவு',
  },
  te:{nav_main:'ముఖ్యమైనది',nav_dashboard:'డాష్‌బోర్డు',nav_diary:'పొలం డైరీ',nav_commerce:'వ్యాపారం',nav_buy:'విత్తనాలు కొను',nav_sell:'పంట అమ్ము',nav_storage:'శీతల గిడ్డంగి',nav_finance:'ఆర్థికం & సంక్షేమం',nav_credit:'రుణాలు',nav_schemes:'ప్రభుత్వ పథకాలు',nav_training:'శిక్షణ',nav_community:'సమాజం',nav_forum:'రైతు వేదిక',helplines:'హెల్ప్‌లైన్లు',page_home:'డాష్‌బోర్డు',page_buy:'విత్తనాలు కొను',page_sell:'పంట అమ్ము',page_storage:'శీతల గిడ్డంగి',page_credit:'రుణాలు',page_schemes:'ప్రభుత్వ పథకాలు',page_training:'శిక్షణ',page_diary:'పొలం డైరీ',page_forum:'రైతు వేదిక',home_greeting:'మీ డాష్‌బోర్డుకు స్వాగతం',home_sub:'ప్రారంభించడానికి మీ ప్రొఫైల్ సెట్ చేయండి.',profile_setup:'ప్రొఫైల్ సెట్ చేయండి',your_name:'మీ పేరు',your_loc:'గ్రామం / జిల్లా',name_ph:'ఉదా. రమేష్ కుమార్',loc_ph:'ఉదా. గుంటూరు, ఆంధ్రప్రదేశ్',save_profile:'ప్రొఫైల్ సేవ్ చేయి',stat_income:'ఆదాయం',stat_income_sub:'మీ అమ్మకాల జాబితా నుండి',stat_listings:'చురుకైన జాబితాలు',stat_listings_sub:'అమ్మకానికి పంట',stat_diary:'డైరీ ఎంట్రీలు',stat_diary_sub:'పొలం కార్యకలాపాలు',stat_posts:'వేదిక పోస్టులు',stat_posts_sub:'సమాజంతో పంచుకున్నవి',quick_actions:'శీఘ్ర చర్యలు',qa_list:'పంట జాబితా చేయి',qa_buy:'విత్తనాలు కొను',qa_diary:'పొలం డైరీ',qa_schemes:'పథకాలు',recent_activity:'ఇటీవలి కార్యకలాపం',empty_activity:'ఇంకా కార్యకలాపం లేదు.',buy_title:'విత్తనాలు కొను',buy_sub:'మీకు అవసరమైన వస్తువులు జోడించండి.',buy_form_title:'జాబితాకు జోడించు',item_name:'వస్తువు పేరు',item_name_ph:'ఉదా. DAP ఎరువు',category:'వర్గం',qty_unit:'పరిమాణం & యూనిట్',qty_unit_ph:'ఉదా. 50 కిలోలు',est_price:'అంచనా ధర (₹)',est_price_ph:'ఉదా. 1350',add_item:'జాబితాకు జోడించు',my_input_list:'నా కొనుగోలు జాబితా',empty_buy:'కొనుగోలు జాబితా ఖాళీగా ఉంది.',sell_title:'పంట అమ్ము',sell_sub:'నేరుగా కొనుగోలుదారులకు అమ్మండి.',new_listing:'కొత్త జాబితా',produce_name:'పంట పేరు',produce_name_ph:'ఉదా. టమాటాలు',qty_kg:'పరిమాణం (కిలోలు)',price_kg:'కిలో ధర (₹)',harvest_date:'పంట తేదీ',description:'వివరణ (ఐచ్ఛికం)',desc_ph:'తాజాగా పండించినది, సేంద్రీయ...',post_listing:'జాబితా పోస్ట్ చేయి',active_listings:'మీ చురుకైన జాబితాలు',empty_sell:'ఇంకా జాబితాలు లేవు.',storage_title:'శీతల గిడ్డంగి',storage_sub:'సమీపంలోని శీతల గిడ్డంగి వివరాలు జోడించండి.',map_soon:'మ్యాప్ — త్వరలో వస్తుంది',add_storage:'శీతల గిడ్డంగి జోడించు',facility_name:'సౌకర్యం పేరు',facility_ph:'ఉదా. ఆంధ్ర కోల్డ్ చైన్',distance:'దూరం',dist_ph:'ఉదా. 2.4 కి.మీ దూరం',contact:'సంప్రదింపు / ఫోన్',contact_ph:'ఉదా. 9876543210',capacity:'సామర్థ్యం / గమనిక',cap_ph:'ఉదా. 10 టన్నులు అందుబాటులో',save_facility:'శీతల గిడ్డంగి సేవ్ చేయి',saved_facilities:'సేవ్ చేసిన గిడ్డంగులు',empty_storage:'ఇంకా గిడ్డంగి సేవ్ చేయలేదు.',credit_title:'రుణాలు',credit_sub:'మీ రుణ దరఖాస్తులను ట్రాక్ చేయండి.',add_loan:'రుణం / దరఖాస్తు జోడించు',loan_purpose:'రుణ ఉద్దేశం',loan_purpose_ph:'ఉదా. ఖరీఫ్ విత్తన కొనుగోలు',amount:'మొత్తం (₹)',amount_ph:'ఉదా. 20000',lender:'రుణదాత / మూలం',lender_ph:'ఉదా. SBI, సహకార బ్యాంక్',status:'స్థితి',loan_notes:'గమనికలు',loan_notes_ph:'వడ్డీ రేటు, కాలం, EMI తేదీ...',save_loan:'రుణం సేవ్ చేయి',your_loans:'మీ రుణాలు',empty_loans:'ఇంకా రుణాలు జోడించలేదు.',schemes_title:'ప్రభుత్వ పథకాలు',schemes_sub:'దరఖాస్తు చేసిన పథకాలను ట్రాక్ చేయండి.',key_schemes:'చిన్న రైతులకు ముఖ్యమైన పథకాలు',key_schemes_list:'PM-KISAN · PM పంట బీమా · కిసాన్ క్రెడిట్ కార్డు · RKVY',track_scheme:'పథకం ట్రాక్ చేయి',scheme_name:'పథకం పేరు',scheme_name_ph:'ఉదా. PM-KISAN',benefit:'లబ్ధి మొత్తం',benefit_ph:'ఉదా. ₹6,000/సంవత్సరం',applied_on:'దరఖాస్తు తేదీ',scheme_notes:'గమనికలు',scheme_notes_ph:'అవసరమైన పత్రాలు...',save_scheme:'సేవ్ చేయి',my_schemes:'నా పథకాలు',empty_schemes:'ఇంకా పథకాలు జోడించలేదు.',training_title:'శిక్షణ & నిపుణుల సహాయం',training_sub:'శిక్షణ వీడియో లింకులు సేవ్ చేయండి.',save_resource:'వనరు సేవ్ చేయి',title_label:'శీర్షిక',title_ph:'ఉదా. టమాటా సాగు గైడు',link_source:'లింక్ / మూలం (ఐచ్ఛికం)',link_ph:'ఉదా. YouTube లింక్',notes:'గమనికలు',notes_ph:'ముఖ్యమైన అంశాలు...',save_res_btn:'వనరు సేవ్ చేయి',saved_resources:'సేవ్ చేసిన వనరులు',empty_training:'ఇంకా వనరులు లేవు.',diary_title:'పొలం డైరీ',diary_sub:'రోజువారీ పొలం కార్యకలాపాలు నమోదు చేయండి.',new_entry:'కొత్త ఎంట్రీ',activity:'కార్యకలాపం',activity_ph:'ఉదా. పొలం A లో గోధుమ విత్తాను',date:'తేదీ',crop:'పంట',crop_ph:'ఉదా. గోధుమ, టమాటా, వరి',tag_label:'ట్యాగ్',diary_notes_ph:'వాడిన వస్తువులు, వాతావరణం, దిగుబడి...',save_entry:'ఎంట్రీ సేవ్ చేయి',all_entries:'అన్ని ఎంట్రీలు',empty_diary:'ఇంకా ఎంట్రీలు లేవు.',forum_title:'రైతు వేదిక',forum_sub:'ప్రశ్నలు, చిట్కాలు పంచుకోండి.',new_post:'కొత్త పోస్ట్',post_title:'శీర్షిక',post_title_ph:'ఉదా. టమాటా ఆకులు పసుపు పడుతున్నాయి — సలహా?',message:'సందేశం',message_ph:'మీ ప్రశ్న రాయండి...',post_btn:'పోస్ట్ చేయి',empty_forum:'ఇంకా పోస్టులు లేవు.',helpline_title:'హెల్ప్‌లైన్లు & సహాయం',helpline_sub:'మీరు ఒంటరిగా లేరు. ఎప్పుడైనా సంప్రదించండి.',close:'మూసివేయి',bn_home:'హోమ్',bn_sell:'అమ్ము',bn_diary:'డైరీ',bn_forum:'వేదిక',bn_more:'మరింత',ph_eg50:'ఉదా. 50',ph_eg25:'ఉదా. 25',delete_btn:'తొలగించు',remove_btn:'తొలగించు',empty_hint:'↑ మొదటి ఎంట్రీకి పైన ఫారమ్ నింపండి',open_link:'లింక్ తెరువు',my_farm:'నా పొలం',toast_item_added:'జోడించబడింది!',toast_item_name:'వస్తువు పేరు ఇవ్వండి',toast_facility_name:'సౌకర్యం పేరు ఇవ్వండి',toast_facility_saved:'గిడ్డంగి సేవ్ అయింది!',toast_loan_fill:'ఉద్దేశం మరియు మొత్తం ఇవ్వండి',toast_loan_saved:'రుణం సేవ్ అయింది!',toast_scheme_name:'పథకం పేరు ఇవ్వండి',toast_scheme_saved:'సేవ్ అయింది!',toast_train_title:'శీర్షిక ఇవ్వండి',toast_train_saved:'వనరు సేవ్ అయింది!',toast_forum_fill:'శీర్షిక మరియు సందేశం ఇవ్వండి',toast_forum_saved:'పోస్ట్ చేయబడింది!',toast_sell_fill:'పేరు, పరిమాణం, ధర నింపండి',toast_sell_saved:'జాబితా పోస్ట్ అయింది!',toast_diary_fill:'కార్యకలాపం మరియు తేదీ ఇవ్వండి',toast_diary_saved:'ఎంట్రీ సేవ్ అయింది!',toast_profile_name:'మీ పేరు ఇవ్వండి',toast_profile_saved:'ప్రొఫైల్ సేవ్ అయింది!',toast_deleted:'తొలగించబడింది.',helpful_btn:'సహాయకరం',lang_switched:'తెలుగులో మారింది ✓',
    select:'ఎంచుకోండి', opt_seeds:'విత్తనాలు', opt_fert:'ఎరువు', opt_pest:'పురుగుమందు',
    opt_tools:'పనిముట్లు', opt_mach:'యంత్రాలు', opt_other:'ఇతరాలు',
    opt_crop_mgmt:'పంట నిర్వహణ', opt_pest_ctrl:'పురుగు నియంత్రణ', opt_irr:'నీటిపారుదల',
    opt_postharvest:'కోత తర్వాత', opt_finance:'ఆర్థికం',
    loan_applied:'దరఖాస్తు చేశాను', loan_approved:'ఆమోదించబడింది', loan_active:'చురుకుగా ఉంది', loan_repaid:'తిరిగి చెల్లించాను',
    status_want:'దరఖాస్తు చేయాలి', status_applied:'దరఖాస్తు చేశాను', status_docs:'పత్రాలు సమర్పించాను',
    status_approved:'ఆమోదించబడింది', status_rejected:'తిరస్కరించబడింది', status_received:'లాభం పొందాను',
    tag_general:'సాధారణ', tag_sowing:'విత్తనం', tag_harvest:'పంట కోత', tag_pest:'పురుగు హెచ్చరిక',
    tag_irrigation:'నీటిపారుదల', tag_fertiliser:'ఎరువు', tag_other:'ఇతరాలు',
    tag_market:'మార్కెట్ ధరలు', tag_weather:'వాతావరణం', tag_tip:'చిట్కా', tag_help:'సహాయం కావాలి',
    profile_page_title:'నా ప్రొఫైల్', profile_page_sub:'మీ ఖాతా మరియు పొలం వివరాలు.',
    edit_details:'వివరాలు సవరించు', account_lbl:'ఖాతా',
    full_name:'పూర్తి పేరు', mobile_lbl:'మొబైల్', village_lbl:'గ్రామం / పట్టణం',
    district_lbl:'జిల్లా', state_lbl:'రాష్ట్రం', land_lbl:'భూమి (ఎకరాలు)', primary_crop_lbl:'ప్రధాన పంట',
    edit_name_ph:'ఉదా. రమేష్ కుమార్', edit_village_ph:'ఉదా. గుంటూరు',
    edit_district_ph:'ఉదా. గుంటూరు', edit_state_ph:'ఉదా. ఆంధ్రప్రదేశ్',
    save_changes:'మార్పులు సేవ్ చేయి', change_language:'భాష మార్చు', sign_out:'సైన్ అవుట్',
    hl_icall:'iCall — మానసిక ఆరోగ్యం', hl_icall_sub:'సోమ–శని ఉదయం 8 – రాత్రి 10',
    hl_kiran:'KIRAN — సంక్షోభ సహాయం', hl_kiran_sub:'24/7 · ఉచితం · బహుభాషా',
    hl_kcc:'కిసాన్ కాల్ సెంటర్', hl_kcc_sub:'వ్యవసాయ నిపుణుల సలహా · ఉచితం',
    hl_pmk:'PM-KISAN హెల్ప్‌లైన్', hl_pmk_sub:'పథకం విచారణలు & మద్దతు',
  },
  kn:{nav_main:'ಮುಖ್ಯ',nav_dashboard:'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',nav_diary:'ಹೊಲ ದಿನಚರಿ',nav_commerce:'ವ್ಯಾಪಾರ',nav_buy:'ಒಳಸುರಿ ಖರೀದಿ',nav_sell:'ಬೆಳೆ ಮಾರಾಟ',nav_storage:'ಶೀತಲ ಗಿದ್ದಾಂಗಿ',nav_finance:'ಹಣಕಾಸು & ಕಲ್ಯಾಣ',nav_credit:'ಸಾಲ',nav_schemes:'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',nav_training:'ತರಬೇತಿ',nav_community:'ಸಮುದಾಯ',nav_forum:'ರೈತ ವೇದಿಕೆ',helplines:'ಸಹಾಯ ಸಂಖ್ಯೆಗಳು',page_home:'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',page_buy:'ಒಳಸುರಿ ಖರೀದಿ',page_sell:'ಬೆಳೆ ಮಾರಾಟ',page_storage:'ಶೀತಲ ಗಿದ್ದಾಂಗಿ',page_credit:'ಸಾಲ',page_schemes:'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',page_training:'ತರಬೇತಿ',page_diary:'ಹೊಲ ದಿನಚರಿ',page_forum:'ರೈತ ವೇದಿಕೆ',home_greeting:'ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಸ್ವಾಗತ',home_sub:'ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಿ.',profile_setup:'ಪ್ರೊಫೈಲ್ ಹೊಂದಿಸಿ',your_name:'ನಿಮ್ಮ ಹೆಸರು',your_loc:'ಹಳ್ಳಿ / ಜಿಲ್ಲೆ',name_ph:'ಉದಾ. ರಮೇಶ್ ಕುಮಾರ್',loc_ph:'ಉದಾ. ಧಾರವಾಡ, ಕರ್ನಾಟಕ',save_profile:'ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ',stat_income:'ಆದಾಯ',stat_income_sub:'ನಿಮ್ಮ ಮಾರಾಟ ಪಟ್ಟಿಯಿಂದ',stat_listings:'ಸಕ್ರಿಯ ಪಟ್ಟಿಗಳು',stat_listings_sub:'ಮಾರಾಟಕ್ಕೆ ಬೆಳೆ',stat_diary:'ದಿನಚರಿ ನಮೂದುಗಳು',stat_diary_sub:'ಹೊಲ ಚಟುವಟಿಕೆಗಳು',stat_posts:'ವೇದಿಕೆ ಪೋಸ್ಟ್‌ಗಳು',stat_posts_sub:'ಸಮುದಾಯದೊಂದಿಗೆ ಹಂಚಿದ್ದು',quick_actions:'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು',qa_list:'ಬೆಳೆ ಪಟ್ಟಿ ಮಾಡಿ',qa_buy:'ಒಳಸುರಿ ಖರೀದಿ',qa_diary:'ಹೊಲ ದಿನಚರಿ',qa_schemes:'ಯೋಜನೆಗಳು',recent_activity:'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',empty_activity:'ಇನ್ನೂ ಚಟುವಟಿಕೆ ಇಲ್ಲ.',buy_title:'ಒಳಸುರಿ ಖರೀದಿ',buy_sub:'ನಿಮಗೆ ಬೇಕಾದ ವಸ್ತುಗಳನ್ನು ಸೇರಿಸಿ.',buy_form_title:'ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ',item_name:'ವಸ್ತುವಿನ ಹೆಸರು',item_name_ph:'ಉದಾ. DAP ಗೊಬ್ಬರ',category:'ವರ್ಗ',qty_unit:'ಪ್ರಮಾಣ & ಘಟಕ',qty_unit_ph:'ಉದಾ. 50 ಕೆಜಿ',est_price:'ಅಂದಾಜು ಬೆಲೆ (₹)',est_price_ph:'ಉದಾ. 1350',add_item:'ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ',my_input_list:'ನನ್ನ ಖರೀದಿ ಪಟ್ಟಿ',empty_buy:'ಖರೀದಿ ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ.',sell_title:'ಬೆಳೆ ಮಾರಾಟ',sell_sub:'ನೇರವಾಗಿ ಖರೀದಿದಾರರಿಗೆ ಮಾರಿ.',new_listing:'ಹೊಸ ಪಟ್ಟಿ',produce_name:'ಬೆಳೆಯ ಹೆಸರು',produce_name_ph:'ಉದಾ. ಟೊಮ್ಯಾಟೊ',qty_kg:'ಪ್ರಮಾಣ (ಕೆಜಿ)',price_kg:'ಪ್ರತಿ ಕೆಜಿ ಬೆಲೆ (₹)',harvest_date:'ಕಟಾವು ದಿನಾಂಕ',description:'ವಿವರಣೆ (ಐಚ್ಛಿಕ)',desc_ph:'ತಾಜಾ ಕಟಾವು, ಸಾವಯವ...',post_listing:'ಪಟ್ಟಿ ಪೋಸ್ಟ್ ಮಾಡಿ',active_listings:'ನಿಮ್ಮ ಸಕ್ರಿಯ ಪಟ್ಟಿಗಳು',empty_sell:'ಇನ್ನೂ ಪಟ್ಟಿಗಳಿಲ್ಲ.',storage_title:'ಶೀತಲ ಗಿದ್ದಾಂಗಿ',storage_sub:'ಹತ್ತಿರದ ಶೀತಲ ಗಿದ್ದಾಂಗಿ ಮಾಹಿತಿ ಸೇರಿಸಿ.',map_soon:'ನಕ್ಷೆ — ಶೀಘ್ರದಲ್ಲಿ',add_storage:'ಶೀತಲ ಗಿದ್ದಾಂಗಿ ಸೇರಿಸಿ',facility_name:'ಸೌಲಭ್ಯದ ಹೆಸರು',facility_ph:'ಉದಾ. ಕರ್ನಾಟಕ ಕೋಲ್ಡ್ ಚೈನ್',distance:'ದೂರ',dist_ph:'ಉದಾ. 2.4 ಕಿ.ಮೀ ದೂರ',contact:'ಸಂಪರ್ಕ / ದೂರವಾಣಿ',contact_ph:'ಉದಾ. 9876543210',capacity:'ಸಾಮರ್ಥ್ಯ / ಟಿಪ್ಪಣಿ',cap_ph:'ಉದಾ. 10 ಟನ್ ಲಭ್ಯ',save_facility:'ಶೀತಲ ಗಿದ್ದಾಂಗಿ ಉಳಿಸಿ',saved_facilities:'ಉಳಿಸಿದ ಶೀತಲ ಗಿದ್ದಾಂಗಿಗಳು',empty_storage:'ಯಾವ ಶೀತಲ ಗಿದ್ದಾಂಗಿ ಉಳಿಸಿಲ್ಲ.',credit_title:'ಸಾಲ',credit_sub:'ನಿಮ್ಮ ಸಾಲ ಅರ್ಜಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',add_loan:'ಸಾಲ / ಅರ್ಜಿ ಸೇರಿಸಿ',loan_purpose:'ಸಾಲದ ಉದ್ದೇಶ',loan_purpose_ph:'ಉದಾ. ಖರೀಫ್ ಬೀಜ ಖರೀದಿ',amount:'ಮೊತ್ತ (₹)',amount_ph:'ಉದಾ. 20000',lender:'ಸಾಲದಾತ / ಮೂಲ',lender_ph:'ಉದಾ. SBI, ಸಹಕಾರ ಬ್ಯಾಂಕ್',status:'ಸ್ಥಿತಿ',loan_notes:'ಟಿಪ್ಪಣಿಗಳು',loan_notes_ph:'ಬಡ್ಡಿ ದರ, ಅವಧಿ, EMI ದಿನಾಂಕ...',save_loan:'ಸಾಲ ಉಳಿಸಿ',your_loans:'ನಿಮ್ಮ ಸಾಲಗಳು',empty_loans:'ಇನ್ನೂ ಸಾಲ ಸೇರಿಸಿಲ್ಲ.',schemes_title:'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',schemes_sub:'ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ಯೋಜನೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',key_schemes:'ಸಣ್ಣ ರೈತರಿಗೆ ಪ್ರಮುಖ ಯೋಜನೆಗಳು',key_schemes_list:'PM-KISAN · PM ಬೆಳೆ ವಿಮೆ · ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ · RKVY',track_scheme:'ಯೋಜನೆ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ',scheme_name:'ಯೋಜನೆಯ ಹೆಸರು',scheme_name_ph:'ಉದಾ. PM-KISAN',benefit:'ಲಾಭದ ಮೊತ್ತ',benefit_ph:'ಉದಾ. ₹6,000/ವರ್ಷ',applied_on:'ಅರ್ಜಿ ದಿನಾಂಕ',scheme_notes:'ಟಿಪ್ಪಣಿಗಳು',scheme_notes_ph:'ಅಗತ್ಯ ದಾಖಲೆಗಳು...',save_scheme:'ಉಳಿಸಿ',my_schemes:'ನನ್ನ ಯೋಜನೆಗಳು',empty_schemes:'ಇನ್ನೂ ಯೋಜನೆಗಳಿಲ್ಲ.',training_title:'ತರಬೇತಿ & ತಜ್ಞರ ಸಹಾಯ',training_sub:'ತರಬೇತಿ ವೀಡಿಯೊ ಲಿಂಕ್‌ಗಳನ್ನು ಉಳಿಸಿ.',save_resource:'ಸಂಪನ್ಮೂಲ ಉಳಿಸಿ',title_label:'ಶೀರ್ಷಿಕೆ',title_ph:'ಉದಾ. ಟೊಮ್ಯಾಟೊ ಬೆಳೆ ಮಾರ್ಗದರ್ಶಿ',link_source:'ಲಿಂಕ್ / ಮೂಲ (ಐಚ್ಛಿಕ)',link_ph:'ಉದಾ. YouTube ಲಿಂಕ್',notes:'ಟಿಪ್ಪಣಿಗಳು',notes_ph:'ಮುಖ್ಯ ಕಲಿಕೆಗಳು...',save_res_btn:'ಸಂಪನ್ಮೂಲ ಉಳಿಸಿ',saved_resources:'ಉಳಿಸಿದ ಸಂಪನ್ಮೂಲಗಳು',empty_training:'ಇನ್ನೂ ಸಂಪನ್ಮೂಲಗಳಿಲ್ಲ.',diary_title:'ಹೊಲ ದಿನಚರಿ',diary_sub:'ದಿನನಿತ್ಯ ಹೊಲ ಚಟುವಟಿಕೆಗಳನ್ನು ದಾಖಲಿಸಿ.',new_entry:'ಹೊಸ ನಮೂದು',activity:'ಚಟುವಟಿಕೆ',activity_ph:'ಉದಾ. ಹೊಲ A ಯಲ್ಲಿ ಗೋಧಿ ಬಿತ್ತಿದೆ',date:'ದಿನಾಂಕ',crop:'ಬೆಳೆ',crop_ph:'ಉದಾ. ಗೋಧಿ, ಟೊಮ್ಯಾಟೊ, ಭತ್ತ',tag_label:'ಟ್ಯಾಗ್',diary_notes_ph:'ಬಳಸಿದ ಸಾಮಗ್ರಿ, ಹವಾಮಾನ, ಇಳುವರಿ...',save_entry:'ನಮೂದು ಉಳಿಸಿ',all_entries:'ಎಲ್ಲ ನಮೂದುಗಳು',empty_diary:'ಇನ್ನೂ ನಮೂದುಗಳಿಲ್ಲ.',forum_title:'ರೈತ ವೇದಿಕೆ',forum_sub:'ಪ್ರಶ್ನೆಗಳು, ಸಲಹೆಗಳು ಹಂಚಿಕೊಳ್ಳಿ.',new_post:'ಹೊಸ ಪೋಸ್ಟ್',post_title:'ಶೀರ್ಷಿಕೆ',post_title_ph:'ಉದಾ. ಟೊಮ್ಯಾಟೊ ಎಲೆ ಹಳದಿ ಆಗುತ್ತಿದೆ — ಸಲಹೆ?',message:'ಸಂದೇಶ',message_ph:'ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಬರೆಯಿರಿ...',post_btn:'ಪೋಸ್ಟ್ ಮಾಡಿ',empty_forum:'ಇನ್ನೂ ಪೋಸ್ಟ್‌ಗಳಿಲ್ಲ.',helpline_title:'ಸಹಾಯ ಸಂಖ್ಯೆಗಳು & ಬೆಂಬಲ',helpline_sub:'ನೀವು ಒಂಟಿಯಲ್ಲ. ಯಾವಾಗ ಬೇಕಾದರೂ ಸಂಪರ್ಕಿಸಿ.',close:'ಮುಚ್ಚಿ',bn_home:'ಮುಖಪುಟ',bn_sell:'ಮಾರು',bn_diary:'ದಿನಚರಿ',bn_forum:'ವೇದಿಕೆ',bn_more:'ಇನ್ನಷ್ಟು',ph_eg50:'ಉದಾ. 50',ph_eg25:'ಉದಾ. 25',delete_btn:'ಅಳಿಸಿ',remove_btn:'ಅಳಿಸಿ',empty_hint:'↑ ಮೊದಲ ನಮೂದಿಗಾಗಿ ಮೇಲಿನ ಫಾರ್ಮ್ ತುಂಬಿಸಿ',open_link:'ಲಿಂಕ್ ತೆರೆಯಿರಿ',my_farm:'ನನ್ನ ಹೊಲ',toast_item_added:'ಸೇರಿಸಲಾಗಿದೆ!',toast_item_name:'ವಸ್ತುವಿನ ಹೆಸರು ನೀಡಿ',toast_facility_name:'ಸೌಲಭ್ಯದ ಹೆಸರು ನೀಡಿ',toast_facility_saved:'ಶೀತಲ ಗಿದ್ದಾಂಗಿ ಉಳಿಸಲಾಗಿದೆ!',toast_loan_fill:'ಉದ್ದೇಶ ಮತ್ತು ಮೊತ್ತ ನೀಡಿ',toast_loan_saved:'ಸಾಲ ಉಳಿಸಲಾಗಿದೆ!',toast_scheme_name:'ಯೋಜನೆಯ ಹೆಸರು ನೀಡಿ',toast_scheme_saved:'ಉಳಿಸಲಾಗಿದೆ!',toast_train_title:'ಶೀರ್ಷಿಕೆ ನೀಡಿ',toast_train_saved:'ಸಂಪನ್ಮೂಲ ಉಳಿಸಲಾಗಿದೆ!',toast_forum_fill:'ಶೀರ್ಷಿಕೆ ಮತ್ತು ಸಂದೇಶ ನೀಡಿ',toast_forum_saved:'ಪೋಸ್ಟ್ ಮಾಡಲಾಗಿದೆ!',toast_sell_fill:'ಹೆಸರು, ಪ್ರಮಾಣ, ಬೆಲೆ ತುಂಬಿಸಿ',toast_sell_saved:'ಪಟ್ಟಿ ಪೋಸ್ಟ್ ಆಗಿದೆ!',toast_diary_fill:'ಚಟುವಟಿಕೆ ಮತ್ತು ದಿನಾಂಕ ನೀಡಿ',toast_diary_saved:'ನಮೂದು ಉಳಿಸಲಾಗಿದೆ!',toast_profile_name:'ನಿಮ್ಮ ಹೆಸರು ನೀಡಿ',toast_profile_saved:'ಪ್ರೊಫೈಲ್ ಉಳಿಸಲಾಗಿದೆ!',toast_deleted:'ಅಳಿಸಲಾಗಿದೆ.',helpful_btn:'ಸಹಾಯಕ',lang_switched:'ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ ✓',
    select:'ಆಯ್ಕೆ ಮಾಡಿ', opt_seeds:'ಬೀಜಗಳು', opt_fert:'ಗೊಬ್ಬರ', opt_pest:'ಕೀಟನಾಶಕ',
    opt_tools:'ಉಪಕರಣಗಳು', opt_mach:'ಯಂತ್ರೋಪಕರಣ', opt_other:'ಇತರೆ',
    opt_crop_mgmt:'ಬೆಳೆ ನಿರ್ವಹಣೆ', opt_pest_ctrl:'ಕೀಟ ನಿಯಂತ್ರಣ', opt_irr:'ನೀರಾವರಿ',
    opt_postharvest:'ಕಟಾವಿನ ನಂತರ', opt_finance:'ಹಣಕಾಸು',
    loan_applied:'ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ್ದೇನೆ', loan_approved:'ಅನುಮೋದಿಸಲಾಗಿದೆ', loan_active:'ಸಕ್ರಿಯ', loan_repaid:'ಮರುಪಾವತಿ ಮಾಡಿದ್ದೇನೆ',
    status_want:'ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು', status_applied:'ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ್ದೇನೆ', status_docs:'ದಾಖಲೆಗಳು ಸಲ್ಲಿಸಿದ್ದೇನೆ',
    status_approved:'ಅನುಮೋದಿಸಲಾಗಿದೆ', status_rejected:'ತಿರಸ್ಕರಿಸಲಾಗಿದೆ', status_received:'ಲಾಭ ಪಡೆದಿದ್ದೇನೆ',
    tag_general:'ಸಾಮಾನ್ಯ', tag_sowing:'ಬಿತ್ತನೆ', tag_harvest:'ಕಟಾವು', tag_pest:'ಕೀಟ ಎಚ್ಚರಿಕೆ',
    tag_irrigation:'ನೀರಾವರಿ', tag_fertiliser:'ಗೊಬ್ಬರ', tag_other:'ಇತರೆ',
    tag_market:'ಮಾರುಕಟ್ಟೆ ಬೆಲೆ', tag_weather:'ಹವಾಮಾನ', tag_tip:'ಸಲಹೆ', tag_help:'ಸಹಾಯ ಬೇಕು',
    profile_page_title:'ನನ್ನ ಪ್ರೊಫೈಲ್', profile_page_sub:'ನಿಮ್ಮ ಖಾತೆ ಮತ್ತು ಹೊಲದ ಮಾಹಿತಿ.',
    edit_details:'ವಿವರಗಳನ್ನು ಸಂಪಾದಿಸಿ', account_lbl:'ಖಾತೆ',
    full_name:'ಪೂರ್ಣ ಹೆಸರು', mobile_lbl:'ಮೊಬೈಲ್', village_lbl:'ಹಳ್ಳಿ / ಪಟ್ಟಣ',
    district_lbl:'ಜಿಲ್ಲೆ', state_lbl:'ರಾಜ್ಯ', land_lbl:'ಜಮೀನು (ಎಕರೆ)', primary_crop_lbl:'ಮುಖ್ಯ ಬೆಳೆ',
    edit_name_ph:'ಉದಾ. ರಮೇಶ್ ಕುಮಾರ್', edit_village_ph:'ಉದಾ. ಧಾರವಾಡ',
    edit_district_ph:'ಉದಾ. ಧಾರವಾಡ', edit_state_ph:'ಉದಾ. ಕರ್ನಾಟಕ',
    save_changes:'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ', change_language:'ಭಾಷೆ ಬದಲಿಸಿ', sign_out:'ಸೈನ್ ಔಟ್',
    hl_icall:'iCall — ಮಾನಸಿಕ ಆರೋಗ್ಯ', hl_icall_sub:'ಸೋಮ–ಶನಿ ಬೆಳಿಗ್ಗೆ 8 – ರಾತ್ರಿ 10',
    hl_kiran:'KIRAN — ಸಂಕಟ ಸಹಾಯ', hl_kiran_sub:'24/7 · ಉಚಿತ · ಬಹುಭಾಷಾ',
    hl_kcc:'ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್', hl_kcc_sub:'ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆ · ಉಚಿತ',
    hl_pmk:'PM-KISAN ಸಹಾಯ ಸಂಖ್ಯೆ', hl_pmk_sub:'ಯೋಜನೆ ಸಂಬಂಧಿತ ಸಹಾಯ',
  },
  bn:{nav_main:'প্রধান',nav_dashboard:'ড্যাশবোর্ড',nav_diary:'মাঠ ডায়েরি',nav_commerce:'ব্যবসা',nav_buy:'উপকরণ কিনুন',nav_sell:'ফসল বিক্রি',nav_storage:'শীতল গুদাম',nav_finance:'অর্থ ও কল্যাণ',nav_credit:'ঋণ',nav_schemes:'সরকারি প্রকল্প',nav_training:'প্রশিক্ষণ',nav_community:'সম্প্রদায়',nav_forum:'কৃষক মঞ্চ',helplines:'হেল্পলাইন',page_home:'ড্যাশবোর্ড',page_buy:'উপকরণ কিনুন',page_sell:'ফসল বিক্রি',page_storage:'শীতল গুদাম',page_credit:'ঋণ',page_schemes:'সরকারি প্রকল্প',page_training:'প্রশিক্ষণ',page_diary:'মাঠ ডায়েরি',page_forum:'কৃষক মঞ্চ',home_greeting:'আপনার ড্যাশবোর্ডে স্বাগতম',home_sub:'শুরু করতে আপনার প্রোফাইল সেট করুন।',profile_setup:'প্রোফাইল তৈরি করুন',your_name:'আপনার নাম',your_loc:'গ্রাম / জেলা',name_ph:'যেমন: রমেশ কুমার',loc_ph:'যেমন: মুর্শিদাবাদ, পশ্চিমবঙ্গ',save_profile:'প্রোফাইল সংরক্ষণ',stat_income:'আয়',stat_income_sub:'আপনার বিক্রয় তালিকা থেকে',stat_listings:'সক্রিয় তালিকা',stat_listings_sub:'বিক্রয়ের জন্য ফসল',stat_diary:'ডায়েরি এন্ট্রি',stat_diary_sub:'মাঠ কার্যক্রম লগ',stat_posts:'মঞ্চ পোস্ট',stat_posts_sub:'সম্প্রদায়ের সাথে শেয়ার',quick_actions:'দ্রুত কার্যক্রম',qa_list:'ফসল তালিকাভুক্ত করুন',qa_buy:'উপকরণ কিনুন',qa_diary:'মাঠ ডায়েরি',qa_schemes:'প্রকল্প',recent_activity:'সাম্প্রতিক কার্যক্রম',empty_activity:'এখনও কোনো কার্যক্রম নেই।',buy_title:'উপকরণ কিনুন',buy_sub:'আপনার প্রয়োজনীয় জিনিসপত্র যোগ করুন।',buy_form_title:'তালিকায় যোগ করুন',item_name:'পণ্যের নাম',item_name_ph:'যেমন: DAP সার',category:'বিভাগ',qty_unit:'পরিমাণ ও একক',qty_unit_ph:'যেমন: ৫০ কেজি',est_price:'আনুমানিক মূল্য (₹)',est_price_ph:'যেমন: 1350',add_item:'তালিকায় যোগ করুন',my_input_list:'আমার ক্রয় তালিকা',empty_buy:'ক্রয় তালিকা খালি আছে।',sell_title:'ফসল বিক্রি',sell_sub:'সরাসরি ক্রেতাদের কাছে ফসল বিক্রি করুন।',new_listing:'নতুন তালিকা',produce_name:'ফসলের নাম',produce_name_ph:'যেমন: তাজা টমেটো',qty_kg:'পরিমাণ (কেজি)',price_kg:'কেজি প্রতি মূল্য (₹)',harvest_date:'ফসল কাটার তারিখ',description:'বিবরণ (ঐচ্ছিক)',desc_ph:'সদ্য কাটা, জৈব...',post_listing:'তালিকা পোস্ট করুন',active_listings:'আপনার সক্রিয় তালিকা',empty_sell:'এখনও কোনো তালিকা নেই।',storage_title:'শীতল গুদাম',storage_sub:'কাছের শীতল গুদামের তথ্য যোগ করুন।',map_soon:'মানচিত্র — শীঘ্রই আসছে',add_storage:'শীতল গুদাম যোগ করুন',facility_name:'সুবিধার নাম',facility_ph:'যেমন: বাংলা কোল্ড চেইন',distance:'দূরত্ব',dist_ph:'যেমন: ২.৪ কিমি দূরে',contact:'যোগাযোগ / ফোন',contact_ph:'যেমন: 9876543210',capacity:'ধারণক্ষমতা / নোট',cap_ph:'যেমন: ১০ টন পাওয়া যাচ্ছে',save_facility:'শীতল গুদাম সংরক্ষণ',saved_facilities:'সংরক্ষিত শীতল গুদাম',empty_storage:'কোনো শীতল গুদাম সংরক্ষণ করা হয়নি।',credit_title:'ঋণ',credit_sub:'আপনার ঋণ আবেদন ট্র্যাক করুন।',add_loan:'ঋণ / আবেদন যোগ করুন',loan_purpose:'ঋণের উদ্দেশ্য',loan_purpose_ph:'যেমন: খরিফ বীজ কেনা',amount:'পরিমাণ (₹)',amount_ph:'যেমন: 20000',lender:'ঋণদাতা / উৎস',lender_ph:'যেমন: SBI, সমবায় ব্যাংক',status:'অবস্থা',loan_notes:'নোট',loan_notes_ph:'সুদের হার, মেয়াদ, EMI তারিখ...',save_loan:'ঋণ সংরক্ষণ',your_loans:'আপনার ঋণ',empty_loans:'এখনও কোনো ঋণ যোগ করা হয়নি।',schemes_title:'সরকারি প্রকল্প',schemes_sub:'আবেদন করা প্রকল্পগুলো ট্র্যাক করুন।',key_schemes:'ক্ষুদ্র কৃষকদের জন্য প্রধান প্রকল্প',key_schemes_list:'PM-KISAN · PM ফসল বীমা · কিসান ক্রেডিট কার্ড · RKVY',track_scheme:'প্রকল্প ট্র্যাক করুন',scheme_name:'প্রকল্পের নাম',scheme_name_ph:'যেমন: PM-KISAN',benefit:'সুবিধার পরিমাণ',benefit_ph:'যেমন: ₹6,000/বছর',applied_on:'আবেদনের তারিখ',scheme_notes:'নোট',scheme_notes_ph:'প্রয়োজনীয় কাগজপত্র...',save_scheme:'সংরক্ষণ',my_schemes:'আমার প্রকল্প',empty_schemes:'এখনও কোনো প্রকল্প নেই।',training_title:'প্রশিক্ষণ ও বিশেষজ্ঞ সহায়তা',training_sub:'প্রশিক্ষণ ভিডিও লিংক সংরক্ষণ করুন।',save_resource:'সম্পদ সংরক্ষণ',title_label:'শিরোনাম',title_ph:'যেমন: টমেটো চাষ গাইড',link_source:'লিংক / উৎস (ঐচ্ছিক)',link_ph:'যেমন: YouTube লিংক',notes:'নোট',notes_ph:'মূল শিক্ষণীয় বিষয়...',save_res_btn:'সম্পদ সংরক্ষণ',saved_resources:'সংরক্ষিত সম্পদ',empty_training:'এখনও কোনো সম্পদ নেই।',diary_title:'মাঠ ডায়েরি',diary_sub:'প্রতিদিনের মাঠ কার্যক্রম লগ করুন।',new_entry:'নতুন এন্ট্রি',activity:'কার্যক্রম',activity_ph:'যেমন: মাঠ A-তে গম বপন করলাম',date:'তারিখ',crop:'ফসল',crop_ph:'যেমন: গম, টমেটো, ধান',tag_label:'ট্যাগ',diary_notes_ph:'ব্যবহৃত উপকরণ, আবহাওয়া, ফলন...',save_entry:'এন্ট্রি সংরক্ষণ',all_entries:'সব এন্ট্রি',empty_diary:'এখনও কোনো এন্ট্রি নেই।',forum_title:'কৃষক মঞ্চ',forum_sub:'প্রশ্ন, টিপস, আপডেট শেয়ার করুন।',new_post:'নতুন পোস্ট',post_title:'শিরোনাম',post_title_ph:'যেমন: টমেটো পাতা হলুদ হচ্ছে — পরামর্শ?',message:'বার্তা',message_ph:'আপনার প্রশ্ন লিখুন...',post_btn:'পোস্ট করুন',empty_forum:'এখনও কোনো পোস্ট নেই।',helpline_title:'হেল্পলাইন ও সহায়তা',helpline_sub:'আপনি একা নন। যেকোনো সময় যোগাযোগ করুন।',close:'বন্ধ করুন',bn_home:'হোম',bn_sell:'বিক্রি',bn_diary:'ডায়েরি',bn_forum:'মঞ্চ',bn_more:'আরও',ph_eg50:'যেমন: ৫০',ph_eg25:'যেমন: ২৫',delete_btn:'মুছুন',remove_btn:'মুছুন',empty_hint:'↑ প্রথম এন্ট্রির জন্য উপরের ফর্ম পূরণ করুন',open_link:'লিংক খুলুন',my_farm:'আমার মাঠ',toast_item_added:'যোগ করা হয়েছে!',toast_item_name:'পণ্যের নাম দিন',toast_facility_name:'সুবিধার নাম দিন',toast_facility_saved:'শীতল গুদাম সংরক্ষিত!',toast_loan_fill:'উদ্দেশ্য ও পরিমাণ দিন',toast_loan_saved:'ঋণ সংরক্ষিত!',toast_scheme_name:'প্রকল্পের নাম দিন',toast_scheme_saved:'সংরক্ষিত!',toast_train_title:'শিরোনাম দিন',toast_train_saved:'সম্পদ সংরক্ষিত!',toast_forum_fill:'শিরোনাম ও বার্তা দিন',toast_forum_saved:'পোস্ট হয়েছে!',toast_sell_fill:'নাম, পরিমাণ, মূল্য পূরণ করুন',toast_sell_saved:'তালিকা পোস্ট হয়েছে!',toast_diary_fill:'কার্যক্রম ও তারিখ দিন',toast_diary_saved:'এন্ট্রি সংরক্ষিত!',toast_profile_name:'আপনার নাম দিন',toast_profile_saved:'প্রোফাইল সংরক্ষিত!',toast_deleted:'মুছে ফেলা হয়েছে।',helpful_btn:'সহায়ক',lang_switched:'বাংলায় পরিবর্তন হয়েছে ✓',
    select:'নির্বাচন করুন', opt_seeds:'বীজ', opt_fert:'সার', opt_pest:'কীটনাশক',
    opt_tools:'সরঞ্জাম', opt_mach:'যন্ত্রপাতি', opt_other:'অন্যান্য',
    opt_crop_mgmt:'ফসল ব্যবস্থাপনা', opt_pest_ctrl:'কীটপতঙ্গ নিয়ন্ত্রণ', opt_irr:'সেচ',
    opt_postharvest:'ফসল কাটার পরে', opt_finance:'অর্থ',
    loan_applied:'আবেদন করা হয়েছে', loan_approved:'অনুমোদিত', loan_active:'সক্রিয়', loan_repaid:'পরিশোধ করা হয়েছে',
    status_want:'আবেদন করতে চাই', status_applied:'আবেদন করা হয়েছে', status_docs:'কাগজপত্র জমা দেওয়া হয়েছে',
    status_approved:'অনুমোদিত', status_rejected:'প্রত্যাখ্যাত', status_received:'সুবিধা পেয়েছি',
    tag_general:'সাধারণ', tag_sowing:'বপন', tag_harvest:'ফসল কাটা', tag_pest:'কীটপতঙ্গ সতর্কতা',
    tag_irrigation:'সেচ', tag_fertiliser:'সার', tag_other:'অন্যান্য',
    tag_market:'বাজার দর', tag_weather:'আবহাওয়া', tag_tip:'টিপস', tag_help:'সাহায্য দরকার',
    profile_page_title:'আমার প্রোফাইল', profile_page_sub:'আপনার অ্যাকাউন্ট ও জমির তথ্য।',
    edit_details:'বিবরণ সম্পাদনা করুন', account_lbl:'অ্যাকাউন্ট',
    full_name:'পূর্ণ নাম', mobile_lbl:'মোবাইল', village_lbl:'গ্রাম / শহর',
    district_lbl:'জেলা', state_lbl:'রাজ্য', land_lbl:'জমি (একর)', primary_crop_lbl:'প্রধান ফসল',
    edit_name_ph:'যেমন: রমেশ কুমার', edit_village_ph:'যেমন: মুর্শিদাবাদ',
    edit_district_ph:'যেমন: মুর্শিদাবাদ', edit_state_ph:'যেমন: পশ্চিমবঙ্গ',
    save_changes:'পরিবর্তন সংরক্ষণ করুন', change_language:'ভাষা পরিবর্তন', sign_out:'সাইন আউট',
    hl_icall:'iCall — মানসিক স্বাস্থ্য', hl_icall_sub:'সোম–শনি সকাল ৮ – রাত ১০',
    hl_kiran:'KIRAN — সংকট সহায়তা', hl_kiran_sub:'24/7 · বিনামূল্যে · বহুভাষিক',
    hl_kcc:'কিসান কল সেন্টার', hl_kcc_sub:'কৃষি বিশেষজ্ঞ পরামর্শ · বিনামূল্যে',
    hl_pmk:'PM-KISAN হেল্পলাইন', hl_pmk_sub:'প্রকল্প সংক্রান্ত সহায়তা',
  },
};


// ─────────────────────────────────────────────
// AgriSetu — dashboard.js  (clean rewrite)
// ─────────────────────────────────────────────

// ══════════════════════════════════════════════
// FIREBASE
// ══════════════════════════════════════════════
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9PzIapkX_uwileMw3Ffqkg8d1_57RjtM",
  authDomain: "agrisetu-75ccd.firebaseapp.com",
  databaseURL: "https://agrisetu-75ccd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrisetu-75ccd",
  storageBucket: "agrisetu-75ccd.firebasestorage.app",
  messagingSenderId: "134242302853",
  appId: "1:134242302853:web:d123e9230ea5ffc30fa2ec"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getDatabase(app);
let currentUID = null;

// ══════════════════════════════════════════════
// IN-MEMORY STORE — single source of truth
// ══════════════════════════════════════════════
const DB = {
  profile:{}, diary:[], sell:[], buy:[],
  storage:[], loans:[], schemes:[],
  training:[], forum:[], activity:[]
};

// ── Firebase helpers ──
function farmerRef(path) { return ref(db, `farmers/${currentUID}/${path}`); }

function fbSet(key, value) {
  if (!currentUID) return;
  if (key === 'profile') { set(farmerRef('profile'), value); return; }
  const obj = {};
  value.forEach(item => { obj[item.id] = item; });
  set(farmerRef(key), obj);
}

// ── Auth ──
onAuthStateChanged(auth, user => {
  if (user) {
    currentUID = user.uid;
    localStorage.setItem('uid', user.uid);
    loadAllData();
  } else {
    window.location.href = 'signin.html';
  }
});

function loadAllData() {
  const keys = ['profile','diary','sell','buy','storage','loans','schemes','training','forum','activity'];
  keys.forEach(key => {
    onValue(farmerRef(key), snap => {
      const val = snap.val();
      if (key === 'profile') {
        DB.profile = val || {};
        populateProfileForm(DB.profile);
      } else {
        DB[key] = val ? Object.entries(val).map(([id, data]) => ({ ...data, id })) : [];
      }
      renderAll();
      applyTranslations();
    });
  });
}

// ══════════════════════════════════════════════
// i18n
// ══════════════════════════════════════════════
let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
  return LANG[currentLang]?.[key] ?? LANG.en?.[key] ?? key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.getElementById('langDropdown')?.classList.remove('open');
  applyTranslations();
  toast(t('lang_switched'));
}
window.setLang = setLang;

function toggleLangMenu() {
  document.getElementById('langDropdown')?.classList.toggle('open');
}
window.toggleLangMenu = toggleLangMenu;

document.addEventListener('click', e => {
  const dd = document.getElementById('langDropdown');
  if (dd && !dd.contains(e.target)) dd.classList.remove('open');
});

// ── Full translation pass — called on every lang switch and page load ──
function applyTranslations() {
  // Lang button label
  const L = {en:'EN',hi:'हि',mr:'म',ta:'த',te:'తె',kn:'ಕ',bn:'বাং'};
  const ll = document.getElementById('lang-label');
  if (ll) ll.textContent = L[currentLang] || currentLang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(el =>
    el.classList.toggle('active', el.dataset.lang === currentLang)
  );

  // All data-i18n elements (text + SVG-containing ones)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (!el.querySelector('svg,img')) {
      el.textContent = val;
    } else {
      // Preserve child elements, only update text nodes
      let found = false;
      el.childNodes.forEach(n => {
        if (n.nodeType === 3 && n.textContent.trim()) { n.textContent = ' ' + val; found = true; }
      });
      if (!found) el.appendChild(document.createTextNode(' ' + val));
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });

  // Select option text
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n-opt'));
  });

  // Page-specific static text that isn't tagged with data-i18n
  _translatePageText();

  // Topbar title
  const active = document.querySelector('.page.active');
  if (active) {
    const pid = active.id.replace('page-','');
    const titles = {home:'page_home',buy:'page_buy',sell:'page_sell',storage:'page_storage',
      credit:'page_credit',schemes:'page_schemes',training:'page_training',
      diary:'page_diary',forum:'page_forum',profile:'profile_page_title'};
    const el = document.getElementById('topbar-title');
    if (el) el.textContent = t(titles[pid] || 'page_'+pid);
  }
}

// Translate hardcoded page text that can't use data-i18n easily
function _translatePageText() {
  // Helper shortcuts
  const Q  = (sel) => document.querySelector(sel);
  const ph = (id, key) => { const el=document.getElementById(id); if(el) el.placeholder=t(key); };
  const so = (id, keys) => {
    const sel=document.getElementById(id); if(!sel) return;
    keys.forEach((k,i) => { if(sel.options[i]) sel.options[i].text = t(k); });
  };
  const tn = (el, key) => { // set text node inside element with SVG children
    if (!el) return;
    let found=false;
    el.childNodes.forEach(n => { if(n.nodeType===3&&n.textContent.trim()){n.textContent=' '+t(key);found=true;} });
    if (!found) el.appendChild(document.createTextNode(' '+t(key)));
  };

  // BUY
  if(Q('#page-buy .page-header h2')) Q('#page-buy .page-header h2').textContent=t('buy_title');
  if(Q('#page-buy .page-header p'))  Q('#page-buy .page-header p').textContent=t('buy_sub');
  tn(Q('#page-buy .card-title'), 'buy_form_title');
  ph('buy-name','item_name_ph'); ph('buy-qty','qty_unit_ph'); ph('buy-price','est_price_ph');
  so('buy-cat',['select','opt_seeds','opt_fert','opt_pest','opt_tools','opt_mach','opt_other']);

  // SELL
  if(Q('#page-sell .page-header h2')) Q('#page-sell .page-header h2').textContent=t('sell_title');
  if(Q('#page-sell .page-header p'))  Q('#page-sell .page-header p').textContent=t('sell_sub');
  tn(Q('#page-sell .card-title'), 'new_listing');
  ph('sell-name','produce_name_ph'); ph('sell-qty','ph_eg50'); ph('sell-price','ph_eg25'); ph('sell-desc','desc_ph');

  // STORAGE
  if(Q('#page-storage .page-header h2')) Q('#page-storage .page-header h2').textContent=t('storage_title');
  if(Q('#page-storage .page-header p'))  Q('#page-storage .page-header p').textContent=t('storage_sub');
  if(Q('#page-storage .map-placeholder p')) Q('#page-storage .map-placeholder p').textContent=t('map_soon');
  tn(Q('#page-storage .card-title'), 'add_storage');
  ph('storage-name','facility_ph'); ph('storage-dist','dist_ph'); ph('storage-phone','contact_ph'); ph('storage-cap','cap_ph');

  // CREDIT
  if(Q('#page-credit .page-header h2')) Q('#page-credit .page-header h2').textContent=t('credit_title');
  if(Q('#page-credit .page-header p'))  Q('#page-credit .page-header p').textContent=t('credit_sub');
  tn(Q('#page-credit .card-title'), 'add_loan');
  ph('loan-purpose','loan_purpose_ph'); ph('loan-amount','amount_ph'); ph('loan-lender','lender_ph'); ph('loan-notes','loan_notes_ph');
  so('loan-status',['loan_applied','loan_approved','loan_active','loan_repaid']);

  // SCHEMES
  if(Q('#page-schemes .page-header h2')) Q('#page-schemes .page-header h2').textContent=t('schemes_title');
  if(Q('#page-schemes .page-header p'))  Q('#page-schemes .page-header p').textContent=t('schemes_sub');
  const sciEl=Q('#page-schemes .scheme-info-banner');
  if(sciEl){const ds=sciEl.querySelectorAll('div');if(ds[0])ds[0].textContent=t('key_schemes');if(ds[1])ds[1].textContent=t('key_schemes_list');}
  tn(Q('#page-schemes .card-title'), 'track_scheme');
  ph('scheme-name','scheme_name_ph'); ph('scheme-benefit','benefit_ph'); ph('scheme-notes','scheme_notes_ph');
  so('scheme-status',['status_want','status_applied','status_docs','status_approved','status_rejected','status_received']);

  // TRAINING
  if(Q('#page-training .page-header h2')) Q('#page-training .page-header h2').textContent=t('training_title');
  if(Q('#page-training .page-header p'))  Q('#page-training .page-header p').textContent=t('training_sub');
  tn(Q('#page-training .card-title'), 'save_resource');
  ph('train-title','title_ph'); ph('train-link','link_ph'); ph('train-notes','notes_ph');
  so('train-cat',['select','opt_crop_mgmt','opt_pest_ctrl','opt_irr','opt_postharvest','opt_finance','opt_other']);

  // DIARY
  if(Q('#page-diary .page-header h2')) Q('#page-diary .page-header h2').textContent=t('diary_title');
  if(Q('#page-diary .page-header p'))  Q('#page-diary .page-header p').textContent=t('diary_sub');
  tn(Q('#page-diary .card-title'), 'new_entry');
  ph('diary-activity','activity_ph'); ph('diary-crop','crop_ph'); ph('diary-notes','diary_notes_ph');
  so('diary-tag',['tag_general','tag_sowing','tag_harvest','tag_pest','tag_irrigation','tag_fertiliser','tag_other']);

  // FORUM
  if(Q('#page-forum .page-header h2')) Q('#page-forum .page-header h2').textContent=t('forum_title');
  if(Q('#page-forum .page-header p'))  Q('#page-forum .page-header p').textContent=t('forum_sub');
  tn(Q('#page-forum .card-title'), 'new_post');
  ph('forum-title','post_title_ph'); ph('forum-body','message_ph');
  so('forum-tag',['tag_general','opt_pest_ctrl','tag_market','tag_weather','tag_tip','tag_help']);

  // PROFILE
  if(Q('#page-profile .page-header h2')) Q('#page-profile .page-header h2').textContent=t('profile_page_title');
  if(Q('#page-profile .page-header p'))  Q('#page-profile .page-header p').textContent=t('profile_page_sub');
  // form labels
  const pLabels=[...document.querySelectorAll('#page-profile .form-label')];
  const pKeys=['full_name','mobile_lbl','village_lbl','district_lbl','state_lbl','land_lbl','primary_crop_lbl'];
  pLabels.forEach((el,i)=>{ if(pKeys[i]) el.textContent=t(pKeys[i]); });
  ph('edit-name','edit_name_ph'); ph('edit-village','edit_village_ph');
  ph('edit-district','edit_district_ph'); ph('edit-state','edit_state_ph');

  // HELPLINE MODAL
  if(Q('#helplineModal h3')) Q('#helplineModal h3').textContent=t('helpline_title');
  if(Q('#helplineModal .modal>p')) Q('#helplineModal .modal>p').textContent=t('helpline_sub');
  const hlT=document.querySelectorAll('.helpline-item .hi-text strong');
  const hlS=document.querySelectorAll('.helpline-item .hi-text span');
  ['hl_icall','hl_kiran','hl_kcc','hl_pmk'].forEach((k,i)=>{if(hlT[i])hlT[i].textContent=t(k);});
  ['hl_icall_sub','hl_kiran_sub','hl_kcc_sub','hl_pmk_sub'].forEach((k,i)=>{if(hlS[i])hlS[i].textContent=t(k);});
  if(Q('.modal-close')) Q('.modal-close').textContent=t('close');

  // Sign out / Change language / Save buttons
  const signOutBtn = Q('[onclick="confirmSignOut()"]');
  if(signOutBtn) { const tn2=[...signOutBtn.childNodes].find(n=>n.nodeType===3&&n.textContent.trim()); if(tn2) tn2.textContent=' '+t('sign_out'); }
}

// ══════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

// ══════════════════════════════════════════════
// NAV
// ══════════════════════════════════════════════
function goTo(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item,.bn-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');
  document.querySelectorAll(`[data-page="${id}"]`).forEach(n => n.classList.add('active'));
  if (!document.querySelector(`.bn-item[data-page="${id}"]`))
    document.querySelector('.bn-more')?.classList.add('active');
  window.scrollTo(0, 0);
  applyTranslations();
  renderAll();
}
window.goTo = goTo;

document.querySelectorAll('.nav-item[data-page]').forEach(n =>
  n.addEventListener('click', () => goTo(n.dataset.page))
);

// ══════════════════════════════════════════════
// MODAL / DRAWER
// ══════════════════════════════════════════════
function openModal()  { document.getElementById('helplineModal')?.classList.add('open'); }
function closeModal() { document.getElementById('helplineModal')?.classList.remove('open'); }
document.getElementById('helplineModal')?.addEventListener('click', e => {
  if (e.target.id === 'helplineModal') closeModal();
});
function openDrawer() {
  document.getElementById('mobileDrawer')?.classList.add('open');
  document.getElementById('drawerOverlay')?.classList.add('open');
}
function closeDrawer() {
  document.getElementById('mobileDrawer')?.classList.remove('open');
  document.getElementById('drawerOverlay')?.classList.remove('open');
}
window.openModal=openModal; window.closeModal=closeModal;
window.openDrawer=openDrawer; window.closeDrawer=closeDrawer;

// ══════════════════════════════════════════════
// SIGN OUT
// ══════════════════════════════════════════════
function confirmSignOut() {
  if (confirm(t('sign_out') + '?')) {
    signOut(auth).then(() => {
      localStorage.removeItem('uid');
      window.location.href = 'signin.html';
    }).catch(console.error);
  }
}
window.confirmSignOut = confirmSignOut;

function changeLanguage() { toggleLangMenu(); }
window.changeLanguage = changeLanguage;

// ══════════════════════════════════════════════
// DELETE ITEM
// ══════════════════════════════════════════════
function deleteItem(key, id) {
  DB[key] = (DB[key] || []).filter(x => String(x.id) !== String(id));
  renderAll();
  toast(t('toast_deleted'));
  if (currentUID) remove(ref(db, `farmers/${currentUID}/${key}/${id}`));
}
window.deleteItem = deleteItem;

// ══════════════════════════════════════════════
// PROFILE
// ══════════════════════════════════════════════
function populateProfileForm(p) {
  const fill = (id, val) => { const el=document.getElementById(id); if(el&&val!=null) el.value=val; };
  fill('edit-name', p.name); fill('edit-phone', p.phone);
  fill('edit-village', p.village); fill('edit-district', p.district);
  fill('edit-state', p.state); fill('edit-land', p.land);
  const cropEl = document.getElementById('edit-crop');
  if (cropEl && p.crop) {
    [...cropEl.options].forEach((opt, i) => {
      if (opt.text === p.crop || opt.value === p.crop) cropEl.selectedIndex = i;
    });
  }
}

function saveProfile() {
  const name = document.getElementById('edit-name')?.value.trim();
  if (!name) { toast(t('toast_profile_name')); return; }
  const updated = {
    ...DB.profile, name,
    village:  document.getElementById('edit-village')?.value.trim()  || '',
    district: document.getElementById('edit-district')?.value.trim() || '',
    state:    document.getElementById('edit-state')?.value.trim()    || '',
    land:     document.getElementById('edit-land')?.value            || '',
    crop:     document.getElementById('edit-crop')?.value            || '',
    phone:    DB.profile.phone || ''
  };
  DB.profile = updated;
  fbSet('profile', updated);
  updateProfileUI();
  toast(t('toast_profile_saved'));
}
window.saveProfile = saveProfile;

function updateProfileUI() {
  const p    = DB.profile;
  const name = p.name || t('my_farm');
  const loc  = [p.village, p.district, p.state].filter(Boolean).join(', ') || '—';
  const crop = p.crop || '—';
  const land = p.land ? p.land + ' acres' : '—';

  ['sb-farmer-name','drawer-farmer-name'].forEach(id => {
    const el=document.getElementById(id); if(el) el.textContent=name;
  });
  ['sb-farmer-loc','drawer-farmer-loc'].forEach(id => {
    const el=document.getElementById(id); if(el) el.textContent=loc;
  });

  const set = (id, val) => { const el=document.getElementById(id); if(el) el.textContent=val; };
  set('hero-name', name);
  set('hero-loc-text', loc);
  set('hero-crop-text', crop);
  set('hero-land-text', land);
  set('profile-display-name', name);
  set('profile-display-phone', p.phone || '');
  set('profile-display-crop', crop !== '—' ? crop : '');

  const greet = document.getElementById('home-greeting');
  if (greet) greet.textContent = p.name ? `Good day, ${p.name.split(' ')[0]} 👋` : t('home_greeting');
  const sub = document.getElementById('home-subtext');
  if (sub) sub.textContent = loc !== '—' ? loc : t('home_sub');

  const card = document.getElementById('profile-setup-card');
  if (card) card.style.display = p.name ? 'none' : '';
}

function handleProfilePic(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const src = e.target.result;
    ['profile-pic-display','hero-avatar','sb-avatar'].forEach(id => {
      const wrap = document.getElementById(id); if (!wrap) return;
      let img = wrap.querySelector('img');
      if (!img) { img = document.createElement('img'); wrap.prepend(img); }
      img.src = src; img.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:50%;';
      wrap.querySelector('svg')?.style.setProperty('display','none');
    });
  };
  reader.readAsDataURL(file);
}
window.handleProfilePic = handleProfilePic;

// ══════════════════════════════════════════════
// DIARY
// ══════════════════════════════════════════════
function addDiaryEntry() {
  const activity = document.getElementById('diary-activity')?.value.trim();
  const date     = document.getElementById('diary-date')?.value;
  const crop     = document.getElementById('diary-crop')?.value.trim();
  const tagSel   = document.getElementById('diary-tag');
  const tag      = tagSel?.value;
  const tagLabel = tagSel?.options[tagSel.selectedIndex]?.text;
  const notes    = document.getElementById('diary-notes')?.value.trim();
  if (!activity || !date) { toast(t('toast_diary_fill')); return; }
  const entries = [...(DB.diary||[])];
  const entry = { id: String(Date.now()), activity, date, crop, tag, tagLabel, notes };
  entries.unshift(entry);
  DB.diary = entries;
  fbSet('diary', entries);
  ['diary-activity','diary-crop','diary-notes'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('diary-date').value = new Date().toISOString().split('T')[0];
  renderDiary(); renderStats();
  toast(t('toast_diary_saved'));
  _addActivity('diary', activity);
}
window.addDiaryEntry = addDiaryEntry;

function renderDiary() {
  const entries = DB.diary || [];
  const list = document.getElementById('diary-list');
  if (!list) return;
  if (!entries.length) { list.innerHTML = emptyState(t('empty_diary')); return; }
  list.innerHTML = entries.map(e => {
    const d = new Date(e.date + 'T00:00:00');
    const dd = d.getDate();
    const mm = d.toLocaleString('default',{month:'short'});
    const tagColor = {Sowing:'amber',Harvest:'green','Pest Alert':'red',Irrigation:'blue',Fertiliser:'amber'}[e.tagLabel] || 'green';
    return `<div class="diary-entry">
      <div class="diary-date"><div class="dd">${dd}</div><div class="mm">${mm}</div></div>
      <div class="diary-content">
        <h4>${esc(e.activity)}</h4>
        ${e.notes?`<p>${esc(e.notes)}</p>`:''}
        <div class="diary-tags">
          ${e.crop?`<span class="tag tag-green">${esc(e.crop)}</span>`:''}
          ${e.tagLabel?`<span class="tag tag-${tagColor}">${esc(e.tagLabel)}</span>`:''}
          <button class="btn btn-danger btn-sm" style="margin-left:auto" onclick="deleteItem('diary','${e.id}')">${t('delete_btn')}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════
// SELL
// ══════════════════════════════════════════════
function addSellListing() {
  const name  = document.getElementById('sell-name')?.value.trim();
  const qty   = document.getElementById('sell-qty')?.value.trim();
  const price = document.getElementById('sell-price')?.value.trim();
  const date  = document.getElementById('sell-date')?.value;
  const desc  = document.getElementById('sell-desc')?.value.trim();
  if (!name || !qty || !price) { toast(t('toast_sell_fill')); return; }
  const arr = [...(DB.sell||[])];
  arr.unshift({ id:String(Date.now()), name, qty, price, date, desc });
  DB.sell = arr;
  fbSet('sell', arr);
  ['sell-name','sell-qty','sell-price','sell-desc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('sell-date').value = new Date().toISOString().split('T')[0];
  renderSell(); renderStats();
  toast(t('toast_sell_saved'));
  _addActivity('sell', `${name} — ${qty}kg @ ₹${price}/kg`);
}
window.addSellListing = addSellListing;

function renderSell() {
  const items = DB.sell || [];
  const list = document.getElementById('sell-list');
  if (!list) return;
  if (!items.length) { list.innerHTML = emptyState(t('empty_sell')); return; }
  list.innerHTML = items.map(l => `
    <div class="listing-card">
      <div class="listing-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 22V12M12 12C12 7 7 3 3 3c0 5 3.5 9 9 9zM12 12c0-5 5-9 9-9-1 5-4.5 9-9 9z" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="listing-info">
        <div class="listing-name">${esc(l.name)} — ${esc(l.qty)}kg</div>
        <div class="listing-meta">${l.date||''} ${l.desc?'· '+esc(l.desc.slice(0,40)):''}</div>
      </div>
      <div class="listing-price">₹${esc(l.price)}/kg</div>
      <span class="tag tag-green">Live</span>
      <button class="btn btn-danger btn-sm" onclick="deleteItem('sell','${l.id}')">${t('remove_btn')}</button>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// BUY
// ══════════════════════════════════════════════
function addBuyItem() {
  const name  = document.getElementById('buy-name')?.value.trim();
  const cat   = document.getElementById('buy-cat')?.value;
  const qty   = document.getElementById('buy-qty')?.value.trim();
  const price = document.getElementById('buy-price')?.value.trim();
  if (!name) { toast(t('toast_item_name')); return; }
  const arr = [...(DB.buy||[])];
  arr.unshift({ id:String(Date.now()), name, cat, qty, price });
  DB.buy = arr;
  fbSet('buy', arr);
  ['buy-name','buy-qty','buy-price'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('buy-cat').value = '';
  renderBuy();
  toast(t('toast_item_added'));
}
window.addBuyItem = addBuyItem;

function renderBuy() {
  const items = DB.buy || [];
  const list = document.getElementById('buy-list');
  if (!list) return;
  if (!items.length) { list.innerHTML = emptyState(t('empty_buy')); return; }
  list.innerHTML = items.map(i => `
    <div class="listing-card">
      <div class="listing-icon amber-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="listing-info">
        <div class="listing-name">${esc(i.name)}</div>
        <div class="listing-meta">${i.cat?esc(i.cat)+' · ':''}${i.qty?esc(i.qty):''}</div>
      </div>
      ${i.price?`<div class="listing-price" style="color:var(--amber)">₹${esc(i.price)}</div>`:''}
      ${i.cat?`<span class="tag tag-amber">${esc(i.cat)}</span>`:''}
      <button class="btn btn-danger btn-sm" onclick="deleteItem('buy','${i.id}')">${t('remove_btn')}</button>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// STORAGE
// ══════════════════════════════════════════════
function addStorage() {
  const name  = document.getElementById('storage-name')?.value.trim();
  const dist  = document.getElementById('storage-dist')?.value.trim();
  const phone = document.getElementById('storage-phone')?.value.trim();
  const cap   = document.getElementById('storage-cap')?.value.trim();
  if (!name) { toast(t('toast_facility_name')); return; }
  const arr = [...(DB.storage||[])];
  arr.unshift({ id:String(Date.now()), name, dist, phone, cap });
  DB.storage = arr;
  fbSet('storage', arr);
  ['storage-name','storage-dist','storage-phone','storage-cap'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderStorage();
  toast(t('toast_facility_saved'));
}
window.addStorage = addStorage;

function renderStorage() {
  const items = DB.storage || [];
  const list = document.getElementById('storage-list');
  if (!list) return;
  if (!items.length) { list.innerHTML = emptyState(t('empty_storage')); return; }
  list.innerHTML = items.map(s => `
    <div class="storage-card">
      <div class="storage-icon"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div>
      <div class="storage-info">
        <div class="storage-name">${esc(s.name)}</div>
        <div class="storage-dist">${s.dist?esc(s.dist):''} ${s.phone?'· '+esc(s.phone):''}</div>
      </div>
      ${s.cap?`<div class="cap-avail">${esc(s.cap)}</div>`:''}
      <button class="btn btn-danger btn-sm" onclick="deleteItem('storage','${s.id}')">${t('remove_btn')}</button>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// LOANS
// ══════════════════════════════════════════════
function addLoan() {
  const purpose = document.getElementById('loan-purpose')?.value.trim();
  const amount  = document.getElementById('loan-amount')?.value.trim();
  const lender  = document.getElementById('loan-lender')?.value.trim();
  const status  = document.getElementById('loan-status')?.value;
  const notes   = document.getElementById('loan-notes')?.value.trim();
  if (!purpose || !amount) { toast(t('toast_loan_fill')); return; }
  const arr = [...(DB.loans||[])];
  arr.unshift({ id:String(Date.now()), purpose, amount, lender, status, notes });
  DB.loans = arr;
  fbSet('loans', arr);
  ['loan-purpose','loan-amount','loan-lender','loan-notes'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderLoans();
  toast(t('toast_loan_saved'));
}
window.addLoan = addLoan;

function renderLoans() {
  const loans = DB.loans || [];
  const list = document.getElementById('loan-list');
  if (!list) return;
  if (!loans.length) { list.innerHTML = emptyState(t('empty_loans')); return; }
  const colorMap = {Applied:'amber',Approved:'green',Active:'green',Repaid:'green'};
  list.innerHTML = loans.map(l => `
    <div class="loan-card">
      <div class="loan-header">
        <div><div class="loan-title">${esc(l.purpose)}</div><div style="font-size:.75rem;color:var(--muted)">${l.lender||''}</div></div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.3rem">
          <div class="loan-amount">₹${Number(l.amount||0).toLocaleString('en-IN')}</div>
          <span class="tag tag-${colorMap[l.status]||'amber'}">${esc(l.status)}</span>
        </div>
      </div>
      ${l.notes?`<div style="font-size:.8rem;color:var(--muted);margin:.5rem 0">${esc(l.notes)}</div>`:''}
      <button class="btn btn-danger btn-sm" onclick="deleteItem('loans','${l.id}')">${t('remove_btn')}</button>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// SCHEMES
// ══════════════════════════════════════════════
function addScheme() {
  const name    = document.getElementById('scheme-name')?.value.trim();
  const status  = document.getElementById('scheme-status')?.value;
  const benefit = document.getElementById('scheme-benefit')?.value.trim();
  const date    = document.getElementById('scheme-date')?.value;
  const notes   = document.getElementById('scheme-notes')?.value.trim();
  if (!name) { toast(t('toast_scheme_name')); return; }
  const arr = [...(DB.schemes||[])];
  arr.unshift({ id:String(Date.now()), name, status, benefit, date, notes });
  DB.schemes = arr;
  fbSet('schemes', arr);
  ['scheme-name','scheme-benefit','scheme-notes'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const sd=document.getElementById('scheme-date'); if(sd) sd.value='';
  renderSchemes();
  toast(t('toast_scheme_saved'));
}
window.addScheme = addScheme;

function renderSchemes() {
  const schemes = DB.schemes || [];
  const list = document.getElementById('scheme-list');
  if (!list) return;
  if (!schemes.length) { list.innerHTML = emptyState(t('empty_schemes')); return; }
  const colorMap = {'Want to Apply':'amber','Applied':'amber','Documents Submitted':'amber','Approved':'green','Rejected':'red','Received Benefit':'green'};
  list.innerHTML = schemes.map(s => `
    <div class="scheme-card">
      <div class="scheme-header"><div class="scheme-name">${esc(s.name)}</div><span class="tag tag-${colorMap[s.status]||'amber'}">${esc(s.status)}</span></div>
      ${s.benefit?`<div class="scheme-benefit">${esc(s.benefit)}</div>`:''}
      ${s.date?`<div style="font-size:.78rem;color:var(--muted);margin-bottom:.4rem">${s.date}</div>`:''}
      ${s.notes?`<div class="scheme-body">${esc(s.notes)}</div>`:''}
      <button class="btn btn-danger btn-sm" onclick="deleteItem('schemes','${s.id}')">${t('remove_btn')}</button>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// TRAINING
// ══════════════════════════════════════════════
function addTraining() {
  const title = document.getElementById('train-title')?.value.trim();
  const cat   = document.getElementById('train-cat')?.value;
  const link  = document.getElementById('train-link')?.value.trim();
  const notes = document.getElementById('train-notes')?.value.trim();
  if (!title) { toast(t('toast_train_title')); return; }
  const arr = [...(DB.training||[])];
  arr.unshift({ id:String(Date.now()), title, cat, link, notes });
  DB.training = arr;
  fbSet('training', arr);
  ['train-title','train-link','train-notes'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const tc=document.getElementById('train-cat'); if(tc) tc.value='';
  renderTraining();
  toast(t('toast_train_saved'));
}
window.addTraining = addTraining;

function renderTraining() {
  const items = DB.training || [];
  const list = document.getElementById('training-list');
  if (!list) return;
  if (!items.length) { list.innerHTML=`<div style="grid-column:1/-1">${emptyState(t('empty_training'))}</div>`; return; }
  list.innerHTML = items.map(tr => `
    <div class="training-card">
      <div class="training-thumb ${tr.cat==='Pest Control'||tr.cat==='Finance'?'amber':''}">
        <svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="training-body">
        <div class="training-title">${esc(tr.title)}</div>
        <div class="training-meta">${tr.cat||''} ${tr.link?`· <a href="${esc(tr.link)}" target="_blank" style="color:var(--green)">${t('open_link')}</a>`:''}</div>
        ${tr.notes?`<div style="font-size:.78rem;color:var(--muted);margin-top:.3rem">${esc(tr.notes)}</div>`:''}
        <button class="btn btn-danger btn-sm" style="margin-top:.6rem" onclick="deleteItem('training','${tr.id}')">${t('remove_btn')}</button>
      </div>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// FORUM
// ══════════════════════════════════════════════
function addForumPost() {
  const title    = document.getElementById('forum-title')?.value.trim();
  const body     = document.getElementById('forum-body')?.value.trim();
  const tagSel   = document.getElementById('forum-tag');
  const tag      = tagSel?.value;
  const tagLabel = tagSel?.options[tagSel.selectedIndex]?.text;
  if (!title || !body) { toast(t('toast_forum_fill')); return; }
  const arr = [...(DB.forum||[])];
  arr.unshift({
    id: String(Date.now()), title, body, tag, tagLabel,
    author: DB.profile.name || 'You',
    loc: [DB.profile.village, DB.profile.district].filter(Boolean).join(', '),
    ts: new Date().toLocaleDateString('en-IN')
  });
  DB.forum = arr;
  fbSet('forum', arr);
  ['forum-title','forum-body'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderForum(); renderStats();
  toast(t('toast_forum_saved'));
  _addActivity('forum', title);
}
window.addForumPost = addForumPost;

function renderForum() {
  const posts = DB.forum || [];
  const list = document.getElementById('forum-list');
  if (!list) return;
  if (!posts.length) { list.innerHTML = emptyState(t('empty_forum')); return; }
  list.innerHTML = posts.map(p => `
    <div class="forum-post">
      <div class="forum-header">
        <div class="forum-avatar"><svg viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <div><div class="forum-author">${esc(p.author)}</div><div class="forum-time">${p.loc?esc(p.loc)+' · ':''}${p.ts}</div></div>
        <span class="tag tag-${p.tag||'green'}" style="margin-left:auto">${esc(p.tagLabel||'')}</span>
      </div>
      <div class="forum-title">${esc(p.title)}</div>
      <div class="forum-body">${esc(p.body)}</div>
      <div class="forum-footer">
        <button class="forum-action"><svg viewBox="0 0 24 24" fill="none"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>${t('helpful_btn')}</button>
        <button class="btn btn-danger btn-sm" onclick="deleteItem('forum','${p.id}')">${t('delete_btn')}</button>
      </div>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// ACTIVITY
// ══════════════════════════════════════════════
function _addActivity(type, text) {
  const arr = [...(DB.activity||[])];
  arr.unshift({ id:String(Date.now()), type, text, ts: new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}) });
  if (arr.length > 10) arr.pop();
  DB.activity = arr;
  fbSet('activity', arr);
  renderActivity();
}

function renderActivity() {
  const list = document.getElementById('home-activity-list');
  if (!list) return;
  const activities = DB.activity || [];
  if (!activities.length) {
    list.innerHTML = `<div class="empty-state"><p>${t('empty_activity')}</p></div>`;
    return;
  }
  const icons = {
    sell:`<svg viewBox="0 0 24 24" fill="none"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    forum:`<svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    diary:`<svg viewBox="0 0 24 24" fill="none"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
  };
  list.innerHTML = activities.map(a => `
    <div class="activity-row">
      <div class="act-icon ${a.type==='sell'?'':'amber'}">${icons[a.type]||icons.diary}</div>
      <div class="act-text"><strong>${esc(a.text)}</strong></div>
      <div class="act-time">${a.ts}</div>
    </div>`).join('');
}

// ══════════════════════════════════════════════
// STATS
// ══════════════════════════════════════════════
function renderStats() {
  const sell  = DB.sell  || [];
  const diary = DB.diary || [];
  const forum = DB.forum || [];
  const income = sell.reduce((s,l) => s + (Number(l.price)||0)*(Number(l.qty)||0), 0);
  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set('stat-income',   '₹'+income.toLocaleString('en-IN'));
  set('stat-listings', sell.length);
  set('stat-diary',    diary.length);
  set('stat-posts',    forum.length);
}

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════
function emptyState(msg) {
  return `<div class="empty-state">
    <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    <p>${msg}</p><div class="empty-hint">${t('empty_hint')}</div>
  </div>`;
}
function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ══════════════════════════════════════════════
// RENDER ALL
// ══════════════════════════════════════════════
function renderAll() {
  updateProfileUI();
  renderDiary(); renderSell(); renderBuy(); renderStorage();
  renderLoans(); renderSchemes(); renderTraining(); renderForum();
  renderActivity(); renderStats();
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
document.querySelectorAll('input[type="date"]').forEach(el => {
  el.value = new Date().toISOString().split('T')[0];
});
applyTranslations();

// ══ DARK MODE ══
// Persist preference in localStorage, apply on load
(function initDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
  }
})();

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
}
window.toggleDarkMode = toggleDarkMode;
// ══════════════════════════════════════════════
// SCHEME QUIZ ENGINE
// Based on official eligibility criteria table
// ══════════════════════════════════════════════

const SCHEMES_DB = [
  {
    id: 'pm_kisan', name: 'PM-KISAN', emoji: '💰',
    fullName: 'Pradhan Mantri Kisan Samman Nidhi',
    benefit: '₹6,000/year (₹2,000 × 3 instalments)',
    helpline: '155261', applyUrl: 'https://pmkisan.gov.in',
    docs: ['Aadhaar card', 'Land records (Khatauni)', 'Bank account', 'Mobile number'],
    // Table: land ≤ 2 ha (≤5 ac), NOT govt, pension < 10k, NOT professional, NOT income tax payer
    check: a => {
      if (a.govt === 'yes')        return { status:'no',  reason:'Government employees and their families are excluded from PM-KISAN.' };
      if (a.pension === 'high')    return { status:'no',  reason:'Families receiving pension ≥ ₹10,000/month are not eligible.' };
      if (a.profession === 'yes')  return { status:'no',  reason:'Families with licensed professionals (doctors, lawyers, etc.) are excluded.' };
      if (a.tax === 'yes')         return { status:'no',  reason:'Income tax payers are not eligible for PM-KISAN.' };
      if (a.land === 'above10')    return { status:'maybe', reason:'Your land may exceed the 2-hectare limit. Verify with your local agriculture office.' };
      return { status:'yes', reason:'You meet all PM-KISAN eligibility conditions! Apply online or at your nearest CSC.' };
    },
    tip: 'Apply at any Common Service Centre (CSC) with your Aadhaar and land records. Money comes directly to your bank account — 3 instalments of ₹2,000 per year.',
  },
  {
    id: 'pmky', name: 'PMKY', emoji: '👴',
    fullName: 'Pradhan Mantri Kisan Maan Dhan Yojana',
    benefit: '₹3,000/month pension after age 60',
    helpline: '1800-267-6888', applyUrl: 'https://maandhan.in',
    docs: ['Aadhaar card', 'Bank account/IFSC', 'Age proof (must be 18–40 to enrol)'],
    // Table: age 18–40, land ≤ 2 ha, NOT govt, pension NA, NOT professional, NOT income tax, has spouse
    check: a => {
      if (a.age !== '18to40')      return { status:'no',  reason:'You must be between 18–40 years old to enrol in PMKY. Once enrolled, you get ₹3,000/month from age 60.' };
      if (a.govt === 'yes')        return { status:'no',  reason:'Government employees are not eligible.' };
      if (a.tax === 'yes')         return { status:'no',  reason:'Income tax payers cannot enrol in PMKY.' };
      if (a.land === 'above10')    return { status:'no',  reason:'Only small/marginal farmers with ≤ 2 hectares qualify.' };
      return { status:'yes', reason:'You qualify for PMKY! Monthly contribution of ₹55–₹200 and the government matches it. Pension for life after 60.' };
    },
    tip: 'Enrol at any CSC. Contribution is just ₹55–₹200/month depending on your age — government contributes the same amount. You get ₹3,000/month for life after turning 60!',
  },
  {
    id: 'pkvy', name: 'PKVY', emoji: '🌿',
    fullName: 'Paramparagat Krishi Vikas Yojana',
    benefit: '₹50,000/hectare over 3 years for organic farming',
    helpline: '1800-180-1551', applyUrl: 'https://pgsindia-ncof.gov.in',
    docs: ['Land records', 'Aadhaar', 'Willingness to adopt organic practices'],
    // Table: land ≤ 2 ha, cultivation = cultivable — organic focused
    check: a => {
      if (a.farming === 'organic' || a.farming === 'mixed') return { status:'yes', reason:'You grow organic or want to switch — perfect fit for PKVY! Full support provided.' };
      if (a.land === 'above10') return { status:'maybe', reason:'PKVY targets small farmers but larger holdings can apply through cluster groups. Check with your KVK.' };
      return { status:'maybe', reason:'PKVY is open to all cultivating farmers willing to adopt organic. You can apply and get full support to switch.' };
    },
    tip: 'Contact your Krishi Vigyan Kendra (KVK) or local Agriculture Department. You can apply individually or as a cluster. Covers seeds, training, certification and more.',
  },
  {
    id: 'smam', name: 'SMAM', emoji: '🚜',
    fullName: 'Sub-Mission on Agriculture Mechanization',
    benefit: '40–50% subsidy on tractors, threshers, seeders & equipment',
    helpline: '1800-180-1551', applyUrl: 'https://agrimachinery.nic.in',
    docs: ['Aadhaar', 'Land records', 'Bank account', 'Caste certificate (for higher subsidy)'],
    // Table: financially weak — for small/marginal farmers
    check: a => {
      if (a.farming === 'mechanized' || a.farming === 'mixed') return { status:'yes', reason:'You want farm machinery — SMAM gives you 40–50% subsidy directly! ✓' };
      if (a.land === 'under2' || a.land === '2to5')            return { status:'yes', reason:'Small/marginal farmers get priority under SMAM. Apply for machinery subsidies!' };
      return { status:'maybe', reason:'SMAM is open to all farmers. If you plan to buy any equipment, apply for the subsidy — no reason not to.' };
    },
    tip: 'Apply through your State Agriculture Department portal. SC/ST farmers get up to 50% subsidy, others 40%. Covers tractors, harvesters, sprayers, seeders and more.',
  },
  {
    id: 'shc', name: 'Soil Health Card', emoji: '🧪',
    fullName: 'Soil Health Card Scheme',
    benefit: 'Free soil testing + personalised fertiliser recommendations',
    helpline: '1800-180-1551', applyUrl: 'https://soilhealth.dac.gov.in',
    docs: ['Aadhaar', 'Land details for soil sampling'],
    // Table: any cultivating farmer — cultivation status = cultivable
    check: a => {
      return { status:'yes', reason:'Every cultivating farmer gets a free Soil Health Card. No restrictions. ✓' };
    },
    tip: 'Cards issued every 2 years. Tells you exactly what NPK your soil needs — saves money on fertilisers and boosts yield. Visit your nearest agriculture office.',
  },
  {
    id: 'pmfby', name: 'PM Fasal Bima', emoji: '🛡️',
    fullName: 'Pradhan Mantri Fasal Bima Yojana',
    benefit: 'Full crop insurance — covered against drought, flood & pest damage',
    helpline: '1800-200-7710', applyUrl: 'https://pmfby.gov.in',
    docs: ['Aadhaar', 'Land records / tenancy agreement', 'Bank account', 'Sowing certificate'],
    // Table: any cultivating farmer with cultivable land
    check: a => {
      if (a.farming === 'cultivable' || a.farming === 'mixed') return { status:'yes', reason:'Food crop farmers are fully covered under PM Fasal Bima. Apply before sowing! ✓' };
      if (a.farming === 'organic') return { status:'yes', reason:'Organic crop farmers can also insure their crops under PMFBY. ✓' };
      return { status:'maybe', reason:'Most farmers with cultivable land qualify. Check with your bank or agriculture office.' };
    },
    tip: 'Premium is just 2% for Kharif crops, 1.5% for Rabi. Apply before sowing season through your bank, CSC, or the PMFBY app. Covers 100% of losses from natural disasters.',
  },
];

const quizAnswers = {};

function startQuiz() {
  showQuizStep(1);
}
window.startQuiz = startQuiz;

function showQuizStep(n) {
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  const id = (n === 'results') ? 'quiz-results' : 'quiz-step-' + n;
  document.getElementById(id)?.classList.add('active');
}

function selectOpt(el) {
  el.closest('.quiz-options').querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  quizAnswers[el.dataset.q] = el.dataset.v;
  const stepId = el.closest('.quiz-step').id.replace('quiz-step-', '');
  const btn = document.getElementById('quiz-next-' + stepId);
  if (btn) btn.disabled = false;
}
window.selectOpt = selectOpt;

function quizNext(current) {
  if (current < 7) showQuizStep(current + 1);
  else showQuizResults();
}
window.quizNext = quizNext;

function quizBack(current) {
  showQuizStep(current > 1 ? current - 1 : 0);
}
window.quizBack = quizBack;

function retakeQuiz() {
  Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
  document.querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('selected'));
  document.querySelectorAll('.quiz-next-btn').forEach(b => b.disabled = true);
  showQuizStep(0);
}
window.retakeQuiz = retakeQuiz;

function showQuizResults() {
  const a = quizAnswers;
  const results = SCHEMES_DB.map(s => {
    const { status, reason } = s.check(a);
    return { s, status, reason };
  }).sort((a, b) => ({ yes:0, maybe:1, no:2 }[a.status] - { yes:0, maybe:1, no:2 }[b.status]));

  const yes = results.filter(r => r.status === 'yes').length;
  const maybe = results.filter(r => r.status === 'maybe').length;

  document.getElementById('results-emoji').textContent = yes >= 3 ? '🎉' : yes >= 1 ? '✅' : '🤔';
  document.getElementById('results-title').textContent = yes === 0 ? 'Limited Matches' : yes === 1 ? '1 Scheme You Qualify For!' : yes + ' Schemes You Qualify For!';
  document.getElementById('results-sub').textContent = yes + ' qualifying · ' + maybe + ' possible · ' + (results.length - yes - maybe) + ' not eligible';

  const statusLabel = { yes:'You qualify ✓', maybe:'Possibly eligible', no:'Not eligible' };
  const cardClass   = { yes:'eligible', maybe:'partial', no:'ineligible' };
  const iconYes   = `<svg viewBox="0 0 24 24" fill="none" style="width:15px;height:15px;stroke:var(--green);stroke-width:2.5;flex-shrink:0"><polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const iconMaybe = `<svg viewBox="0 0 24 24" fill="none" style="width:15px;height:15px;stroke:var(--amber);stroke-width:2.5;flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke-linecap="round"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-linecap="round"/></svg>`;
  const iconNo    = `<svg viewBox="0 0 24 24" fill="none" style="width:15px;height:15px;stroke:var(--muted);stroke-width:2.5;flex-shrink:0"><line x1="18" y1="6" x2="6" y2="18" stroke-linecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke-linecap="round"/></svg>`;
  const icons = { yes: iconYes, maybe: iconMaybe, no: iconNo };
  const reasonColor = { yes:'var(--green)', maybe:'var(--amber)', no:'var(--muted)' };

  document.getElementById('scheme-eligibility-list').innerHTML = results.map(({ s, status, reason }) => `
    <div class="eligibility-card ${cardClass[status]}">
      <div class="ec-badge">
        <div style="font-size:1.4rem">${s.emoji}</div>
        <div class="ec-lbl">${statusLabel[status]}</div>
      </div>
      <div class="ec-body">
        <div class="ec-scheme-name">${esc(s.name)} — ${esc(s.fullName)}</div>
        <div class="ec-benefit">${esc(s.benefit)}</div>
        <div style="display:flex;align-items:flex-start;gap:.4rem;font-size:.82rem;color:${reasonColor[status]};margin-bottom:.5rem;">
          ${icons[status]} ${esc(reason)}
        </div>
        <div style="font-size:.79rem;color:var(--muted);line-height:1.55;margin-bottom:.6rem;">💡 ${esc(s.tip)}</div>
        <div style="font-size:.73rem;color:var(--muted);margin-bottom:.8rem;">
          📋 ${s.docs.map(d => `<span style="background:var(--surface);padding:.1rem .4rem;border-radius:4px;margin:.1rem;display:inline-block;">${esc(d)}</span>`).join('')}
        </div>
        <div class="ec-actions">
          ${status !== 'no' ? `<button class="ec-apply-btn" onclick="window.open('${s.applyUrl}','_blank')">
            <svg viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke-linecap="round"/><polyline points="15 3 21 3 21 9" stroke-linecap="round"/><line x1="10" y1="14" x2="21" y2="3" stroke-linecap="round"/></svg>
            Apply Online
          </button>` : ''}
          <button class="ec-track-btn" onclick="prefillTracker('${esc(s.name)}','${esc(s.benefit)}')">
            <svg viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke-linecap="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-linecap="round"/></svg>
            Track Status
          </button>
          <span style="font-size:.72rem;color:var(--muted);align-self:center;">📞 ${esc(s.helpline)}</span>
        </div>
      </div>
    </div>`).join('');

  showQuizStep('results');
}

function prefillTracker(name, benefit) {
  const n = document.getElementById('scheme-name');
  const b = document.getElementById('scheme-benefit');
  if (n) n.value = name;
  if (b) b.value = benefit;
  n?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  toast('Scheme prefilled — set your status below 👇');
}
window.prefillTracker = prefillTracker;

// ══════════════════════════════════════════════
// LIVE MAP — OpenStreetMap via Overpass
// Shows only agricultural POIs + roads
// ══════════════════════════════════════════════

function initMap() {
  const loading = document.getElementById('map-loading');
  const label   = document.getElementById('map-loc-label');
  const wrap    = document.getElementById('map-frame-wrap');
  if (!wrap) return;

  // If Leaflet map already initialized, just re-check location
  if (window._leafletMap) {
    relocateMap(label);
    return;
  }

  // Create div for Leaflet (replaces iframe)
  const mapDiv = document.createElement('div');
  mapDiv.id = 'leaflet-map';
  mapDiv.style.cssText = 'width:100%;height:360px;';
  // Remove iframe if it exists
  const oldIframe = document.getElementById('map-iframe');
  if (oldIframe) oldIframe.remove();
  wrap.insertBefore(mapDiv, wrap.firstChild);

  // Load Leaflet CSS + JS dynamically
  if (!document.getElementById('leaflet-css')) {
    const css = document.createElement('link');
    css.id = 'leaflet-css';
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(css);
  }

  if (window.L) {
    _buildMap(loading, label);
  } else {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => _buildMap(loading, label);
    script.onerror = () => {
      if (loading) loading.innerHTML = '<p style="color:var(--muted);padding:1rem;text-align:center">Map failed to load. Check internet connection.</p>';
    };
    document.head.appendChild(script);
  }
}

function _buildMap(loading, label) {
  const map = L.map('leaflet-map', { zoomControl: true, scrollWheelZoom: false });
  window._leafletMap = map;

  // OSM tile layer — standard mapnik (shows roads, place names, green areas)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  // Hide loading spinner once tiles start rendering
  map.on('load', () => { if (loading) loading.style.display = 'none'; });
  setTimeout(() => { if (loading) loading.style.display = 'none'; }, 3000);

  // Custom farmer marker icon
  const farmerIcon = L.divIcon({
    html: `<div style="background:var(--green);width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;">
      <span style="transform:rotate(45deg);font-size:16px;">🌾</span></div>`,
    iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -36],
    className: '',
  });

  const agriIcon = L.divIcon({
    html: `<div style="background:var(--amber);width:28px;height:28px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-size:14px;">🏪</div>`,
    iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14],
    className: '',
  });

  // Try to get real location
  if (navigator.geolocation) {
    if (label) label.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        map.setView([lat, lon], 13);
        if (loading) loading.style.display = 'none';
        if (label) label.textContent = 'Near your location';

        // Your location marker
        L.marker([lat, lon], { icon: farmerIcon })
          .addTo(map)
          .bindPopup('<strong>📍 Your Location</strong><br>This is where you are')
          .openPopup();

        // Fetch agricultural POIs via Overpass API
        fetchAndPlotPOIs(map, lat, lon, agriIcon, label);
      },
      err => {
        // Fallback to India centre
        map.setView([20.5937, 78.9629], 5);
        if (loading) loading.style.display = 'none';
        if (label) label.textContent = err.code === 1
          ? 'Location denied — showing India'
          : 'Could not get location';
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  } else {
    map.setView([20.5937, 78.9629], 5);
    if (loading) loading.style.display = 'none';
    if (label) label.textContent = 'Geolocation not supported';
  }
}

function relocateMap(label) {
  if (!navigator.geolocation || !window._leafletMap) return;
  if (label) label.textContent = 'Relocating…';
  navigator.geolocation.getCurrentPosition(pos => {
    window._leafletMap.setView([pos.coords.latitude, pos.coords.longitude], 13);
    if (label) label.textContent = 'Near your location';
  }, () => {});
}

function fetchAndPlotPOIs(map, lat, lon, _icon, label) {
  const radius = 5000;

  // Much broader query — anything agriculturally relevant
  const query = `[out:json][timeout:20];(
    node["shop"~"agrarian|farm|garden_centre|fertilizer|seeds|pesticide|hardware"](around:${radius},${lat},${lon});
    node["amenity"~"marketplace|bank|microfinance|cooperative"](around:${radius},${lat},${lon});
    node["landuse"~"farmyard|farmland|orchard|vineyard|meadow|greenhouse_horticulture"](around:${radius},${lat},${lon});
    node["building"~"farm|greenhouse|barn|silo|storage_tank|warehouse"](around:${radius},${lat},${lon});
    node["man_made"~"silo|storage_tank|water_tower|water_well|irrigation"](around:${radius},${lat},${lon});
    node["waterway"~"irrigation_canal|drain"](around:${radius},${lat},${lon});
    node["amenity"="veterinary"](around:${radius},${lat},${lon});
    node["office"~"cooperative|agricultural"](around:${radius},${lat},${lon});
    node["government"~"agricultural_office|land_records"](around:${radius},${lat},${lon});
    node["amenity"="fuel"](around:${radius},${lat},${lon});
  );out body 80;`;

  // Icon + label per tag type
  function getPOIInfo(tags) {
    const shop = tags.shop || '';
    const amenity = tags.amenity || '';
    const building = tags.building || '';
    const landuse = tags.landuse || '';
    const manMade = tags.man_made || '';
    const office = tags.office || '';
    const waterway = tags.waterway || '';

    if (shop === 'agrarian' || shop === 'fertilizer' || shop === 'seeds' || shop === 'pesticide')
      return { emoji:'🌱', color:'#3a7d44', type:'Agri / Seeds Shop' };
    if (shop === 'garden_centre')
      return { emoji:'🪴', color:'#5a9e50', type:'Garden Centre' };
    if (shop === 'hardware')
      return { emoji:'🔧', color:'#888', type:'Hardware / Tools' };
    if (amenity === 'marketplace')
      return { emoji:'🛒', color:'#c97b2e', type:'Market / Mandi' };
    if (amenity === 'bank' || amenity === 'microfinance')
      return { emoji:'🏦', color:'#2e6db4', type:'Bank / Finance' };
    if (amenity === 'cooperative' || office === 'cooperative' || office === 'agricultural')
      return { emoji:'🤝', color:'#6b3fa0', type:'Cooperative / Agri Office' };
    if (amenity === 'veterinary')
      return { emoji:'🐄', color:'#c97b2e', type:'Veterinary' };
    if (amenity === 'fuel')
      return { emoji:'⛽', color:'#555', type:'Fuel Station' };
    if (building === 'farm' || landuse === 'farmyard' || landuse === 'farmland')
      return { emoji:'🌾', color:'#3a7d44', type:'Farm' };
    if (building === 'greenhouse' || landuse === 'greenhouse_horticulture')
      return { emoji:'🏡', color:'#5a9e50', type:'Greenhouse' };
    if (building === 'barn' || building === 'silo' || building === 'warehouse' || building === 'storage_tank')
      return { emoji:'🧊', color:'#1a8a7a', type:'Cold Storage / Warehouse' };
    if (manMade === 'silo' || manMade === 'storage_tank')
      return { emoji:'🏗️', color:'#1a8a7a', type:'Silo / Storage' };
    if (manMade === 'water_well' || manMade === 'water_tower' || manMade === 'irrigation' || waterway)
      return { emoji:'💧', color:'#2e6db4', type:'Irrigation / Water' };
    if (landuse === 'orchard')
      return { emoji:'🍎', color:'#e05a4a', type:'Orchard' };
    if (landuse === 'meadow' || landuse === 'vineyard')
      return { emoji:'🌿', color:'#5a9e50', type:'Meadow / Vineyard' };
    return { emoji:'📍', color:'#6e7e65', type:'Point of Interest' };
  }

  fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: query,
  })
  .then(r => r.json())
  .then(data => {
    const elements = data?.elements || [];
    let plotted = 0;

    elements.forEach(el => {
      if (!el.lat || !el.lon) return;
      const tags = el.tags || {};
      const { emoji, color, type } = getPOIInfo(tags);
      const name = tags.name || type;

      const icon = L.divIcon({
        html: `<div style="background:${color};width:30px;height:30px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;font-size:14px;">${emoji}</div>`,
        iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -15],
        className: '',
      });

      L.marker([el.lat, el.lon], { icon })
        .addTo(map)
        .bindPopup(`<strong style="font-size:.85rem">${name}</strong><br><span style="color:#888;font-size:.75rem">${type}</span>${tags.phone ? `<br><span style="font-size:.75rem">📞 ${tags.phone}</span>` : ''}${tags['opening_hours'] ? `<br><span style="font-size:.75rem">🕐 ${tags['opening_hours']}</span>` : ''}`);
      plotted++;
    });

    if (label) label.textContent = plotted > 0 ? `${plotted} points found nearby` : 'Near your location';
  })
  .catch(() => {
    if (label) label.textContent = 'Near your location';
  });
}

// Init map when storage page is opened
const _origGoTo = window.goTo;
window.goTo = function(id) {
  _origGoTo(id);
  if (id === 'storage') setTimeout(initMap, 150);
  if (id === 'info')    setTimeout(renderMSP, 50);
};
window.initMap = initMap;

// ══════════════════════════════════════════════
// ══════════════════════════════════════════════
// CUSTOMER SUPPORT CHATBOT — Anthropic API
// ══════════════════════════════════════════════

const chatHistory = [];
let chatOpen = false;
let chatGreeted = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chat-window');
  const unread = document.getElementById('chat-unread');
  win?.classList.toggle('open', chatOpen);
  if (chatOpen) {
    if (unread) unread.style.display = 'none';
    if (!chatGreeted) {
      chatGreeted = true;
      const p = DB.profile || {};
      const name = p.name ? p.name.split(' ')[0] : 'there';
      appendBotMsg(`Hey ${name}! 👋 I'm AgriMitra's support assistant. I can help you with anything in the app — selling produce, government schemes, loans, diary entries, or anything else. What do you need?`);
    }
    setTimeout(() => document.getElementById('chat-input')?.focus(), 300);
  }
}
window.toggleChat = toggleChat;

function sendSuggestion(text) {
  const input = document.getElementById('chat-input');
  if (input) input.value = text;
  sendChat();
}
window.sendSuggestion = sendSuggestion;

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input?.value.trim();
  if (!text) return;
  input.value = '';

  // Hide suggestions after first message
  const sugg = document.getElementById('chat-suggestions');
  if (sugg) sugg.style.display = 'none';

  appendUserMsg(text);
  const typingId = appendTyping();

  chatHistory.push({ role: 'user', content: text });

  const p = DB.profile || {};
  const systemPrompt = `You are the friendly customer support assistant for AgriMitra, a farmer dashboard app built for small and marginal Indian farmers.

The app has these features:
- Home dashboard with stats (income, listings, diary entries, forum posts)
- Farm Diary — log daily farm activities, crops, weather, inputs
- Sell Produce — list harvest for direct sale to buyers (no middlemen)
- Buy Inputs — shopping list for seeds, fertiliser, pesticides, tools
- Cold Storage — find and save nearby cold storage facilities, with live GPS map
- Credit & Loans — track loan applications and repayments
- Government Schemes — 7-question quiz to find eligible schemes (PM-KISAN, Fasal Bima, PMKY, SMAM, PKVY, Soil Health Card)
- Training — save useful videos and resources
- Farmer Forum — community Q&A
- My Profile — edit name, village, crop, land size, upload profile photo
- 7 languages supported: English, Hindi, Marathi, Tamil, Telugu, Kannada, Bengali
- Dark mode available

Current farmer profile:
- Name: ${p.name || 'Not set'}
- Village: ${p.village || 'Not set'}, District: ${p.district || 'Not set'}, State: ${p.state || 'Not set'}
- Land: ${p.land || 'Not set'} acres
- Primary crop: ${p.crop || 'Not set'}
- Active sell listings: ${(DB.sell||[]).length}
- Diary entries: ${(DB.diary||[]).length}
- Loans tracked: ${(DB.loans||[]).length}

Be warm, concise, and practical. Answer in the same language the user writes in. Keep responses under 3 sentences unless a step-by-step is needed. Never make up features that don't exist. If you don't know something, say so honestly.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: chatHistory,
      }),
    });

    const data = await res.json();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't get a response. Please try again.";

    removeTyping(typingId);
    appendBotMsg(reply);
    chatHistory.push({ role: 'assistant', content: reply });

    // Trim history to last 10 exchanges to keep tokens low
    if (chatHistory.length > 20) chatHistory.splice(0, 2);

  } catch (err) {
    removeTyping(typingId);
    appendBotMsg("Sorry, I'm having trouble connecting right now. Please try again in a moment.");
    console.error('Chat error:', err);
  }
}
window.sendChat = sendChat;

function appendUserMsg(text) {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const now = new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `<div class="chat-bubble-msg">${esc(text)}</div><div class="chat-msg-time">${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendBotMsg(text) {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return;
  const now = new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `<div class="chat-bubble-msg">${text.replace(/\n/g,'<br>')}</div><div class="chat-msg-time">${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  // Show unread badge if chat is closed
  if (!chatOpen) {
    const unread = document.getElementById('chat-unread');
    if (unread) unread.style.display = 'flex';
  }
}

function appendTyping() {
  const msgs = document.getElementById('chat-messages');
  if (!msgs) return null;
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = `<div class="chat-typing"><span></span><span></span><span></span></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

function removeTyping(id) {
  if (id) document.getElementById(id)?.remove();
}

// ══════════════════════════════════════════════
// MSP DATA — Kharif 2025-26 & Rabi 2026-27
// Source: Ministry of Agriculture, Govt. of India
// ══════════════════════════════════════════════

const MSP_DATA = [
  // KHARIF 2025-26
  { name:'Paddy (Common)',  hindi:'धान (सामान्य)',  emoji:'🌾', season:'kharif', price:2369, prev:2183, unit:'quintal' },
  { name:'Paddy (Grade A)', hindi:'धान (ग्रेड A)',  emoji:'🌾', season:'kharif', price:2407, prev:2203, unit:'quintal' },
  { name:'Jowar (Hybrid)',  hindi:'ज्वार (हाइब्रिड)', emoji:'🌽', season:'kharif', price:3371, prev:3180, unit:'quintal' },
  { name:'Jowar (Maldandi)',hindi:'ज्वार (मालदांडी)', emoji:'🌽', season:'kharif', price:3421, prev:3225, unit:'quintal' },
  { name:'Bajra',           hindi:'बाजरा',          emoji:'🌾', season:'kharif', price:2625, prev:2500, unit:'quintal' },
  { name:'Maize',           hindi:'मक्का',          emoji:'🌽', season:'kharif', price:2225, prev:2090, unit:'quintal' },
  { name:'Ragi',            hindi:'रागी',           emoji:'🌾', season:'kharif', price:4290, prev:3846, unit:'quintal' },
  { name:'Tur (Arhar)',     hindi:'तुअर/अरहर',      emoji:'🫘', season:'kharif', price:7550, prev:7000, unit:'quintal' },
  { name:'Moong',           hindi:'मूंग',           emoji:'🫘', season:'kharif', price:8682, prev:8558, unit:'quintal' },
  { name:'Urad',            hindi:'उड़द',            emoji:'🫘', season:'kharif', price:7400, prev:6950, unit:'quintal' },
  { name:'Groundnut',       hindi:'मूंगफली',        emoji:'🥜', season:'kharif', price:6783, prev:6377, unit:'quintal' },
  { name:'Sunflower Seed',  hindi:'सूरजमुखी',       emoji:'🌻', season:'kharif', price:7280, prev:6760, unit:'quintal' },
  { name:'Soyabean',        hindi:'सोयाबीन',        emoji:'🫘', season:'kharif', price:4892, prev:4600, unit:'quintal' },
  { name:'Sesamum',         hindi:'तिल',            emoji:'🌱', season:'kharif', price:9267, prev:8635, unit:'quintal' },
  { name:'Nigerseed',       hindi:'रामतिल',         emoji:'🌱', season:'kharif', price:8717, prev:7734, unit:'quintal' },
  { name:'Cotton (Medium)', hindi:'कपास (मीडियम)',  emoji:'🌿', season:'kharif', price:7121, prev:6620, unit:'quintal' },
  { name:'Cotton (Long)',   hindi:'कपास (लंबा)',    emoji:'🌿', season:'kharif', price:7521, prev:7020, unit:'quintal' },

  // RABI 2026-27
  { name:'Wheat',           hindi:'गेहूं',          emoji:'🌾', season:'rabi', price:2585, prev:2425, unit:'quintal' },
  { name:'Barley',          hindi:'जौ',             emoji:'🌾', season:'rabi', price:1980, prev:1735, unit:'quintal' },
  { name:'Gram',            hindi:'चना',            emoji:'🫘', season:'rabi', price:5650, prev:5440, unit:'quintal' },
  { name:'Lentil (Masur)',  hindi:'मसूर',           emoji:'🫘', season:'rabi', price:6700, prev:6425, unit:'quintal' },
  { name:'Rapeseed/Mustard',hindi:'सरसों',          emoji:'🌱', season:'rabi', price:5950, prev:5650, unit:'quintal' },
  { name:'Safflower',       hindi:'कुसुम',          emoji:'🌼', season:'rabi', price:5800, prev:5800, unit:'quintal' },

  // COMMERCIAL
  { name:'Jute',            hindi:'जूट',            emoji:'🌿', season:'commercial', price:5335, prev:5050, unit:'quintal' },
  { name:'Copra (Milling)', hindi:'कोपरा (मिलिंग)', emoji:'🥥', season:'commercial', price:11582, prev:10860, unit:'quintal' },
  { name:'Copra (Ball)',    hindi:'कोपरा (बॉल)',    emoji:'🥥', season:'commercial', price:12100, prev:11750, unit:'quintal' },
];

let mspCurrentSeason = 'all';

function renderMSP() {
  const search = (document.getElementById('msp-search')?.value || '').toLowerCase();
  const grid = document.getElementById('msp-grid');
  if (!grid) return;

  const filtered = MSP_DATA.filter(c => {
    const matchSeason = mspCurrentSeason === 'all' || c.season === mspCurrentSeason;
    const matchSearch = !search || c.name.toLowerCase().includes(search) || c.hindi.includes(search);
    return matchSeason && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--muted);font-size:.9rem;">No crops found matching "${search}"</div>`;
    return;
  }

  grid.innerHTML = filtered.map(c => {
    const change = c.price - c.prev;
    const changeStr = change > 0 ? `▲ ₹${change}` : change < 0 ? `▼ ₹${Math.abs(change)}` : '—';
    const changeClass = change > 0 ? 'up' : change < 0 ? 'down' : '';
    const seasonLabel = c.season === 'kharif' ? 'Kharif 2025–26' : c.season === 'rabi' ? 'Rabi 2026–27' : 'Commercial';
    return `<div class="msp-card ${c.season}">
      <div class="msp-crop-row">
        <span class="msp-emoji">${c.emoji}</span>
        <div>
          <div class="msp-crop-name">${c.name}</div>
          <div class="msp-crop-hindi">${c.hindi}</div>
        </div>
      </div>
      <div class="msp-price">₹${c.price.toLocaleString('en-IN')} <span>/ ${c.unit}</span></div>
      <div class="msp-meta">
        <span class="msp-season-tag">${seasonLabel}</span>
        <span class="msp-change ${changeClass}">${changeStr} vs last yr</span>
      </div>
    </div>`;
  }).join('');
}

function filterMSP() { renderMSP(); }
window.filterMSP = filterMSP;

function setMSPSeason(btn, season) {
  document.querySelectorAll('.msp-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  mspCurrentSeason = season;
  renderMSP();
}
window.setMSPSeason = setMSPSeason;