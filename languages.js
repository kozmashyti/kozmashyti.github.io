const countries = [{"countryCode": "AL", "country": "Albania", "nativeName": "Shqipëria", "region": "europe", "languages": [{"code": "sq", "name": "Albanian"}]}, {"countryCode": "AF", "country": "Afghanistan", "nativeName": "افغانستان", "region": "asia_pacific", "languages": [{"code": "ps", "name": "Pushto"}, {"code": "uz", "name": "Uzbek"}, {"code": "tk", "name": "Turkmen"}]}, {"countryCode": "DZ", "country": "Algeria", "nativeName": "الجزائر", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "AS", "country": "American Samoa", "nativeName": "American Samoa", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "sm", "name": "Samoan"}]}, {"countryCode": "AO", "country": "Angola", "nativeName": "Angola", "region": "middle_east_africa", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "AI", "country": "Anguilla", "nativeName": "Anguilla", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "AG", "country": "Antigua and Barbuda", "nativeName": "Antigua and Barbuda", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "AR", "country": "Argentina", "nativeName": "Argentina", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}, {"code": "gn", "name": "Guarani"}]}, {"countryCode": "AM", "country": "Armenia", "nativeName": "Հայաստան", "region": "middle_east_africa", "languages": [{"code": "hy", "name": "Armenian"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "AW", "country": "Aruba", "nativeName": "Aruba", "region": "latin_america", "languages": [{"code": "nl", "name": "Dutch"}, {"code": "pa", "name": "Panjabi"}]}, {"countryCode": "AU", "country": "Australia", "nativeName": "Australia", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "AT", "country": "Austria", "nativeName": "Österreich", "region": "europe", "languages": [{"code": "de", "name": "German"}]}, {"countryCode": "AZ", "country": "Azerbaijan", "nativeName": "Azərbaycan", "region": "middle_east_africa", "languages": [{"code": "az", "name": "Azerbaijani"}, {"code": "hy", "name": "Armenian"}]}, {"countryCode": "BH", "country": "Bahrain", "nativeName": "‏البحرين", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "BD", "country": "Bangladesh", "nativeName": "বাংলাদেশ", "region": "asia_pacific", "languages": [{"code": "bn", "name": "Bengali"}]}, {"countryCode": "BB", "country": "Barbados", "nativeName": "Barbados", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "BY", "country": "Belarus", "nativeName": "Белару́сь", "region": "europe", "languages": [{"code": "be", "name": "Belarusian"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "BE", "country": "Belgium", "nativeName": "België", "region": "europe", "languages": [{"code": "nl", "name": "Dutch"}, {"code": "fr", "name": "French"}, {"code": "de", "name": "German"}]}, {"countryCode": "BZ", "country": "Belize", "nativeName": "Belize", "region": "latin_america", "languages": [{"code": "en", "name": "English"}, {"code": "es", "name": "Spanish"}]}, {"countryCode": "BJ", "country": "Benin", "nativeName": "Bénin", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "BM", "country": "Bermuda", "nativeName": "Bermuda", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "BT", "country": "Bhutan", "nativeName": "ʼbrug-yul", "region": "asia_pacific", "languages": [{"code": "dz", "name": "Dzongkha"}]}, {"countryCode": "BO", "country": "Bolivia", "nativeName": "Bolivia", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}, {"code": "ay", "name": "Aymara"}, {"code": "qu", "name": "Quechua"}]}, {"countryCode": "BA", "country": "Bosnia and Herzegovina", "nativeName": "Bosna i Hercegovina", "region": "europe", "languages": [{"code": "bs", "name": "Bosnian"}, {"code": "hr", "name": "Croatian"}, {"code": "sr", "name": "Serbian"}]}, {"countryCode": "BW", "country": "Botswana", "nativeName": "Botswana", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "tn", "name": "Tswana"}]}, {"countryCode": "BR", "country": "Brazil", "nativeName": "Brasil", "region": "latin_america", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "IO", "country": "British Indian Ocean Territory", "nativeName": "British Indian Ocean Territory", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "BN", "country": "Brunei", "nativeName": "Negara Brunei Darussalam", "region": "asia_pacific", "languages": [{"code": "ms", "name": "Malay (macrolanguage)"}]}, {"countryCode": "BG", "country": "Bulgaria", "nativeName": "България", "region": "europe", "languages": [{"code": "bg", "name": "Bulgarian"}]}, {"countryCode": "BF", "country": "Burkina Faso", "nativeName": "Burkina Faso", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "ff", "name": "Fulah"}]}, {"countryCode": "BI", "country": "Burundi", "nativeName": "Burundi", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "rn", "name": "Rundi"}]}, {"countryCode": "KH", "country": "Cambodia", "nativeName": "Kâmpŭchéa", "region": "asia_pacific", "languages": [{"code": "km", "name": "Khmer"}]}, {"countryCode": "CM", "country": "Cameroon", "nativeName": "Cameroon", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "fr", "name": "French"}]}, {"countryCode": "CA", "country": "Canada", "nativeName": "Canada", "region": "north_america", "languages": [{"code": "en", "name": "English"}, {"code": "fr", "name": "French"}]}, {"countryCode": "CV", "country": "Cape Verde", "nativeName": "Cabo Verde", "region": "middle_east_africa", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "KY", "country": "Cayman Islands", "nativeName": "Cayman Islands", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "CF", "country": "Central African Republic", "nativeName": "Ködörösêse tî Bêafrîka", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "sg", "name": "Sango"}]}, {"countryCode": "TD", "country": "Chad", "nativeName": "Tchad", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "ar", "name": "Arabic"}]}, {"countryCode": "CL", "country": "Chile", "nativeName": "Chile", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "CN", "country": "China", "nativeName": "中国", "region": "asia_pacific", "languages": [{"code": "zh", "name": "Chinese"}]}, {"countryCode": "CX", "country": "Christmas Island", "nativeName": "Christmas Island", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "CC", "country": "Cocos (Keeling) Islands", "nativeName": "Cocos (Keeling) Islands", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "CO", "country": "Colombia", "nativeName": "Colombia", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "KM", "country": "Comoros", "nativeName": "Komori", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}, {"code": "fr", "name": "French"}]}, {"countryCode": "CK", "country": "Cook Islands", "nativeName": "Cook Islands", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "CR", "country": "Costa Rica", "nativeName": "Costa Rica", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "HR", "country": "Croatia", "nativeName": "Hrvatska", "region": "europe", "languages": [{"code": "hr", "name": "Croatian"}]}, {"countryCode": "CU", "country": "Cuba", "nativeName": "Cuba", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "CY", "country": "Cyprus", "nativeName": "Κύπρος", "region": "europe", "languages": [{"code": "el", "name": "Modern Greek (1453-)"}, {"code": "tr", "name": "Turkish"}, {"code": "hy", "name": "Armenian"}]}, {"countryCode": "CZ", "country": "Czech Republic", "nativeName": "Česká republika", "region": "europe", "languages": [{"code": "cs", "name": "Czech"}, {"code": "sk", "name": "Slovak"}]}, {"countryCode": "CD", "country": "Democratic Republic of the Congo", "nativeName": "République démocratique du Congo", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "ln", "name": "Lingala"}, {"code": "kg", "name": "Kongo"}, {"code": "sw", "name": "Swahili (macrolanguage)"}]}, {"countryCode": "DK", "country": "Denmark", "nativeName": "Danmark", "region": "europe", "languages": [{"code": "da", "name": "Danish"}]}, {"countryCode": "DJ", "country": "Djibouti", "nativeName": "Djibouti", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "ar", "name": "Arabic"}]}, {"countryCode": "DM", "country": "Dominica", "nativeName": "Dominica", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "DO", "country": "Dominican Republic", "nativeName": "República Dominicana", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "TL", "country": "East Timor", "nativeName": "Timor-Leste", "region": "asia_pacific", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "EC", "country": "Ecuador", "nativeName": "Ecuador", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "EG", "country": "Egypt", "nativeName": "مصر‎", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "SV", "country": "El Salvador", "nativeName": "El Salvador", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "GQ", "country": "Equatorial Guinea", "nativeName": "Guinea Ecuatorial", "region": "middle_east_africa", "languages": [{"code": "es", "name": "Spanish"}, {"code": "fr", "name": "French"}]}, {"countryCode": "ER", "country": "Eritrea", "nativeName": "ኤርትራ", "region": "middle_east_africa", "languages": [{"code": "ti", "name": "Tigrinya"}, {"code": "ar", "name": "Arabic"}, {"code": "en", "name": "English"}]}, {"countryCode": "EE", "country": "Estonia", "nativeName": "Eesti", "region": "europe", "languages": [{"code": "et", "name": "Estonian"}]}, {"countryCode": "ET", "country": "Ethiopia", "nativeName": "ኢትዮጵያ", "region": "middle_east_africa", "languages": [{"code": "am", "name": "Amharic"}]}, {"countryCode": "FK", "country": "Falkland Islands", "nativeName": "Falkland Islands", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "FO", "country": "Faroe Islands", "nativeName": "Føroyar", "region": "europe", "languages": [{"code": "fo", "name": "Faroese"}]}, {"countryCode": "FM", "country": "Federated States of Micronesia", "nativeName": "Micronesia", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "FJ", "country": "Fiji", "nativeName": "Fiji", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "fj", "name": "Fijian"}, {"code": "hi", "name": "Hindi"}, {"code": "ur", "name": "Urdu"}]}, {"countryCode": "FI", "country": "Finland", "nativeName": "Suomi", "region": "europe", "languages": [{"code": "fi", "name": "Finnish"}, {"code": "sv", "name": "Swedish"}]}, {"countryCode": "FR", "country": "France", "nativeName": "France", "region": "europe", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "GF", "country": "French Guiana", "nativeName": "Guyane française", "region": "latin_america", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "PF", "country": "French Polynesia", "nativeName": "Polynésie française", "region": "asia_pacific", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "TF", "country": "French Southern and Antarctic Lands", "nativeName": "Territoire des Terres australes et antarctiques françaises", "region": "other", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "GA", "country": "Gabon", "nativeName": "Gabon", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "GE", "country": "Georgia", "nativeName": "საქართველო", "region": "middle_east_africa", "languages": [{"code": "ka", "name": "Georgian"}]}, {"countryCode": "DE", "country": "Germany", "nativeName": "Deutschland", "region": "europe", "languages": [{"code": "de", "name": "German"}]}, {"countryCode": "GH", "country": "Ghana", "nativeName": "Ghana", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "GI", "country": "Gibraltar", "nativeName": "Gibraltar", "region": "europe", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "GR", "country": "Greece", "nativeName": "Ελλάδα", "region": "europe", "languages": [{"code": "el", "name": "Modern Greek (1453-)"}]}, {"countryCode": "GL", "country": "Greenland", "nativeName": "Kalaallit Nunaat", "region": "latin_america", "languages": [{"code": "kl", "name": "Kalaallisut"}]}, {"countryCode": "GD", "country": "Grenada", "nativeName": "Grenada", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "GP", "country": "Guadeloupe", "nativeName": "Guadeloupe", "region": "latin_america", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "GU", "country": "Guam", "nativeName": "Guam", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "ch", "name": "Chamorro"}, {"code": "es", "name": "Spanish"}]}, {"countryCode": "GT", "country": "Guatemala", "nativeName": "Guatemala", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "GG", "country": "Guernsey", "nativeName": "Guernsey", "region": "europe", "languages": [{"code": "en", "name": "English"}, {"code": "fr", "name": "French"}]}, {"countryCode": "GN", "country": "Guinea", "nativeName": "Guinée", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "ff", "name": "Fulah"}]}, {"countryCode": "GW", "country": "Guinea-Bissau", "nativeName": "Guiné-Bissau", "region": "middle_east_africa", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "GY", "country": "Guyana", "nativeName": "Guyana", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "HT", "country": "Haiti", "nativeName": "Haïti", "region": "latin_america", "languages": [{"code": "fr", "name": "French"}, {"code": "ht", "name": "Haitian"}]}, {"countryCode": "HM", "country": "Heard Island and McDonald Islands", "nativeName": "Heard Island and McDonald Islands", "region": "other", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "HN", "country": "Honduras", "nativeName": "Honduras", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "HK", "country": "Hong Kong", "nativeName": "香港", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "zh", "name": "Chinese"}]}, {"countryCode": "HU", "country": "Hungary", "nativeName": "Magyarország", "region": "europe", "languages": [{"code": "hu", "name": "Hungarian"}]}, {"countryCode": "IS", "country": "Iceland", "nativeName": "Ísland", "region": "europe", "languages": [{"code": "is", "name": "Icelandic"}]}, {"countryCode": "IN", "country": "India", "nativeName": "भारत", "region": "asia_pacific", "languages": [{"code": "hi", "name": "Hindi"}, {"code": "en", "name": "English"}]}, {"countryCode": "ID", "country": "Indonesia", "nativeName": "Indonesia", "region": "asia_pacific", "languages": [{"code": "id", "name": "Indonesian"}]}, {"countryCode": "IR", "country": "Iran", "nativeName": "Irān", "region": "asia_pacific", "languages": [{"code": "fa", "name": "Persian"}]}, {"countryCode": "IQ", "country": "Iraq", "nativeName": "العراق", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}, {"code": "ku", "name": "Kurdish"}]}, {"countryCode": "IE", "country": "Ireland", "nativeName": "Éire", "region": "europe", "languages": [{"code": "ga", "name": "Irish"}, {"code": "en", "name": "English"}]}, {"countryCode": "IM", "country": "Isle of Man", "nativeName": "Isle of Man", "region": "europe", "languages": [{"code": "en", "name": "English"}, {"code": "gv", "name": "Manx"}]}, {"countryCode": "IL", "country": "Israel", "nativeName": "יִשְׂרָאֵל", "region": "middle_east_africa", "languages": [{"code": "he", "name": "Hebrew"}, {"code": "ar", "name": "Arabic"}]}, {"countryCode": "IT", "country": "Italy", "nativeName": "Italia", "region": "europe", "languages": [{"code": "it", "name": "Italian"}]}, {"countryCode": "CI", "country": "Ivory Coast", "nativeName": "Côte d'Ivoire", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "JM", "country": "Jamaica", "nativeName": "Jamaica", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "JP", "country": "Japan", "nativeName": "日本", "region": "asia_pacific", "languages": [{"code": "ja", "name": "Japanese"}]}, {"countryCode": "JE", "country": "Jersey", "nativeName": "Jersey", "region": "europe", "languages": [{"code": "en", "name": "English"}, {"code": "fr", "name": "French"}]}, {"countryCode": "JO", "country": "Jordan", "nativeName": "الأردن", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "KZ", "country": "Kazakhstan", "nativeName": "Қазақстан", "region": "asia_pacific", "languages": [{"code": "kk", "name": "Kazakh"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "KE", "country": "Kenya", "nativeName": "Kenya", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "sw", "name": "Swahili (macrolanguage)"}]}, {"countryCode": "KI", "country": "Kiribati", "nativeName": "Kiribati", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "KW", "country": "Kuwait", "nativeName": "الكويت", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "KG", "country": "Kyrgyzstan", "nativeName": "Кыргызстан", "region": "asia_pacific", "languages": [{"code": "ky", "name": "Kirghiz"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "LA", "country": "Laos", "nativeName": "ສປປລາວ", "region": "asia_pacific", "languages": [{"code": "lo", "name": "Lao"}]}, {"countryCode": "LV", "country": "Latvia", "nativeName": "Latvija", "region": "europe", "languages": [{"code": "lv", "name": "Latvian"}]}, {"countryCode": "LB", "country": "Lebanon", "nativeName": "لبنان", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}, {"code": "fr", "name": "French"}]}, {"countryCode": "LS", "country": "Lesotho", "nativeName": "Lesotho", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "st", "name": "Southern Sotho"}]}, {"countryCode": "LR", "country": "Liberia", "nativeName": "Liberia", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "LY", "country": "Libya", "nativeName": "‏ليبيا", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "LI", "country": "Liechtenstein", "nativeName": "Liechtenstein", "region": "europe", "languages": [{"code": "de", "name": "German"}]}, {"countryCode": "LT", "country": "Lithuania", "nativeName": "Lietuva", "region": "europe", "languages": [{"code": "lt", "name": "Lithuanian"}]}, {"countryCode": "LU", "country": "Luxembourg", "nativeName": "Luxembourg", "region": "europe", "languages": [{"code": "fr", "name": "French"}, {"code": "de", "name": "German"}, {"code": "lb", "name": "Luxembourgish"}]}, {"countryCode": "MO", "country": "Macau", "nativeName": "澳門", "region": "asia_pacific", "languages": [{"code": "zh", "name": "Chinese"}, {"code": "pt", "name": "Portuguese"}]}, {"countryCode": "MG", "country": "Madagascar", "nativeName": "Madagasikara", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "mg", "name": "Malagasy"}]}, {"countryCode": "MW", "country": "Malawi", "nativeName": "Malawi", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "ny", "name": "Nyanja"}]}, {"countryCode": "MY", "country": "Malaysia", "nativeName": "Malaysia", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "MV", "country": "Maldives", "nativeName": "Maldives", "region": "asia_pacific", "languages": [{"code": "dv", "name": "Dhivehi"}]}, {"countryCode": "ML", "country": "Mali", "nativeName": "Mali", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "MT", "country": "Malta", "nativeName": "Malta", "region": "europe", "languages": [{"code": "mt", "name": "Maltese"}, {"code": "en", "name": "English"}]}, {"countryCode": "MH", "country": "Marshall Islands", "nativeName": "M̧ajeļ", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "mh", "name": "Marshallese"}]}, {"countryCode": "MQ", "country": "Martinique", "nativeName": "Martinique", "region": "latin_america", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "MR", "country": "Mauritania", "nativeName": "موريتانيا", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "MU", "country": "Mauritius", "nativeName": "Maurice", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "YT", "country": "Mayotte", "nativeName": "Mayotte", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "MX", "country": "Mexico", "nativeName": "México", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "MD", "country": "Moldova", "nativeName": "Moldova", "region": "europe", "languages": [{"code": "ro", "name": "Romanian"}]}, {"countryCode": "MC", "country": "Monaco", "nativeName": "Monaco", "region": "europe", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "MN", "country": "Mongolia", "nativeName": "Монгол улс", "region": "asia_pacific", "languages": [{"code": "mn", "name": "Mongolian"}]}, {"countryCode": "MS", "country": "Montserrat", "nativeName": "Montserrat", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "MA", "country": "Morocco", "nativeName": "المغرب", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "MZ", "country": "Mozambique", "nativeName": "Moçambique", "region": "middle_east_africa", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "NA", "country": "Namibia", "nativeName": "Namibia", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "af", "name": "Afrikaans"}]}, {"countryCode": "NR", "country": "Nauru", "nativeName": "Nauru", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "na", "name": "Nauru"}]}, {"countryCode": "NP", "country": "Nepal", "nativeName": "नेपाल", "region": "asia_pacific", "languages": [{"code": "ne", "name": "Nepali (macrolanguage)"}]}, {"countryCode": "NL", "country": "Netherlands", "nativeName": "Nederland", "region": "europe", "languages": [{"code": "nl", "name": "Dutch"}]}, {"countryCode": "NC", "country": "New Caledonia", "nativeName": "Nouvelle-Calédonie", "region": "asia_pacific", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "NZ", "country": "New Zealand", "nativeName": "New Zealand", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "mi", "name": "Maori"}]}, {"countryCode": "NI", "country": "Nicaragua", "nativeName": "Nicaragua", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "NE", "country": "Niger", "nativeName": "Niger", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "NG", "country": "Nigeria", "nativeName": "Nigeria", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "NU", "country": "Niue", "nativeName": "Niuē", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "NF", "country": "Norfolk Island", "nativeName": "Norfolk Island", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "KP", "country": "North Korea", "nativeName": "북한", "region": "asia_pacific", "languages": [{"code": "ko", "name": "Korean"}]}, {"countryCode": "MP", "country": "Northern Mariana Islands", "nativeName": "Northern Mariana Islands", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "ch", "name": "Chamorro"}]}, {"countryCode": "NO", "country": "Norway", "nativeName": "Norge", "region": "europe", "languages": [{"code": "no", "name": "Norwegian"}, {"code": "nb", "name": "Norwegian Bokmål"}, {"code": "nn", "name": "Norwegian Nynorsk"}]}, {"countryCode": "OM", "country": "Oman", "nativeName": "عمان", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "PK", "country": "Pakistan", "nativeName": "Pakistan", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "ur", "name": "Urdu"}]}, {"countryCode": "PW", "country": "Palau", "nativeName": "Palau", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "PA", "country": "Panama", "nativeName": "Panamá", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "PG", "country": "Papua New Guinea", "nativeName": "Papua Niugini", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "PY", "country": "Paraguay", "nativeName": "Paraguay", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}, {"code": "gn", "name": "Guarani"}]}, {"countryCode": "PE", "country": "Peru", "nativeName": "Perú", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "PH", "country": "Philippines", "nativeName": "Pilipinas", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "PN", "country": "Pitcairn Islands", "nativeName": "Pitcairn Islands", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "PL", "country": "Poland", "nativeName": "Polska", "region": "europe", "languages": [{"code": "pl", "name": "Polish"}]}, {"countryCode": "PT", "country": "Portugal", "nativeName": "Portugal", "region": "europe", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "PR", "country": "Puerto Rico", "nativeName": "Puerto Rico", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}, {"code": "en", "name": "English"}]}, {"countryCode": "QA", "country": "Qatar", "nativeName": "قطر", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "MK", "country": "Republic of Macedonia", "nativeName": "Македонија", "region": "europe", "languages": [{"code": "mk", "name": "Macedonian"}]}, {"countryCode": "CG", "country": "Republic of the Congo", "nativeName": "République du Congo", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "ln", "name": "Lingala"}]}, {"countryCode": "RO", "country": "Romania", "nativeName": "România", "region": "europe", "languages": [{"code": "ro", "name": "Romanian"}]}, {"countryCode": "RU", "country": "Russia", "nativeName": "Россия", "region": "europe", "languages": [{"code": "ru", "name": "Russian"}]}, {"countryCode": "RW", "country": "Rwanda", "nativeName": "Rwanda", "region": "middle_east_africa", "languages": [{"code": "rw", "name": "Kinyarwanda"}, {"code": "en", "name": "English"}, {"code": "fr", "name": "French"}]}, {"countryCode": "RE", "country": "Réunion", "nativeName": "La Réunion", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "SH", "country": "Saint Helena", "nativeName": "Saint Helena", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "KN", "country": "Saint Kitts and Nevis", "nativeName": "Saint Kitts and Nevis", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "LC", "country": "Saint Lucia", "nativeName": "Saint Lucia", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "PM", "country": "Saint Pierre and Miquelon", "nativeName": "Saint-Pierre-et-Miquelon", "region": "latin_america", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "VC", "country": "Saint Vincent and the Grenadines", "nativeName": "Saint Vincent and the Grenadines", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "WS", "country": "Samoa", "nativeName": "Samoa", "region": "asia_pacific", "languages": [{"code": "sm", "name": "Samoan"}, {"code": "en", "name": "English"}]}, {"countryCode": "SM", "country": "San Marino", "nativeName": "San Marino", "region": "europe", "languages": [{"code": "it", "name": "Italian"}]}, {"countryCode": "SA", "country": "Saudi Arabia", "nativeName": "العربية السعودية", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "SN", "country": "Senegal", "nativeName": "Sénégal", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "RS", "country": "Serbia", "nativeName": "Srbija", "region": "europe", "languages": [{"code": "rs", "name": "RS"}]}, {"countryCode": "SC", "country": "Seychelles", "nativeName": "Seychelles", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}, {"code": "en", "name": "English"}]}, {"countryCode": "SL", "country": "Sierra Leone", "nativeName": "Sierra Leone", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "SG", "country": "Singapore", "nativeName": "Singapore", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "ms", "name": "Malay (macrolanguage)"}, {"code": "ta", "name": "Tamil"}, {"code": "zh", "name": "Chinese"}]}, {"countryCode": "SK", "country": "Slovakia", "nativeName": "Slovensko", "region": "europe", "languages": [{"code": "sk", "name": "Slovak"}]}, {"countryCode": "SI", "country": "Slovenia", "nativeName": "Slovenija", "region": "europe", "languages": [{"code": "sl", "name": "Slovenian"}]}, {"countryCode": "SB", "country": "Solomon Islands", "nativeName": "Solomon Islands", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "SO", "country": "Somalia", "nativeName": "Soomaaliya", "region": "middle_east_africa", "languages": [{"code": "so", "name": "Somali"}, {"code": "ar", "name": "Arabic"}]}, {"countryCode": "ZA", "country": "South Africa", "nativeName": "South Africa", "region": "middle_east_africa", "languages": [{"code": "af", "name": "Afrikaans"}, {"code": "en", "name": "English"}, {"code": "nr", "name": "South Ndebele"}, {"code": "st", "name": "Southern Sotho"}]}, {"countryCode": "GS", "country": "South Georgia", "nativeName": "South Georgia", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "KR", "country": "South Korea", "nativeName": "대한민국", "region": "asia_pacific", "languages": [{"code": "ko", "name": "Korean"}]}, {"countryCode": "SS", "country": "South Sudan", "nativeName": "South Sudan", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "ES", "country": "Spain", "nativeName": "España", "region": "europe", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "LK", "country": "Sri Lanka", "nativeName": "śrī laṃkāva", "region": "asia_pacific", "languages": [{"code": "si", "name": "Sinhala"}, {"code": "ta", "name": "Tamil"}]}, {"countryCode": "SD", "country": "Sudan", "nativeName": "السودان", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}, {"code": "en", "name": "English"}]}, {"countryCode": "SR", "country": "Suriname", "nativeName": "Suriname", "region": "latin_america", "languages": [{"code": "nl", "name": "Dutch"}]}, {"countryCode": "SJ", "country": "Svalbard and Jan Mayen", "nativeName": "Svalbard og Jan Mayen", "region": "europe", "languages": [{"code": "no", "name": "Norwegian"}]}, {"countryCode": "SZ", "country": "Swaziland", "nativeName": "Swaziland", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "ss", "name": "Swati"}]}, {"countryCode": "SE", "country": "Sweden", "nativeName": "Sverige", "region": "europe", "languages": [{"code": "sv", "name": "Swedish"}]}, {"countryCode": "CH", "country": "Switzerland", "nativeName": "Schweiz", "region": "europe", "languages": [{"code": "de", "name": "German"}, {"code": "fr", "name": "French"}, {"code": "it", "name": "Italian"}]}, {"countryCode": "SY", "country": "Syria", "nativeName": "سوريا", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "ST", "country": "São Tomé and Príncipe", "nativeName": "São Tomé e Príncipe", "region": "middle_east_africa", "languages": [{"code": "pt", "name": "Portuguese"}]}, {"countryCode": "TW", "country": "Taiwan", "nativeName": "臺灣", "region": "asia_pacific", "languages": [{"code": "zh", "name": "Chinese"}]}, {"countryCode": "TJ", "country": "Tajikistan", "nativeName": "Тоҷикистон", "region": "asia_pacific", "languages": [{"code": "tg", "name": "Tajik"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "TZ", "country": "Tanzania", "nativeName": "Tanzania", "region": "middle_east_africa", "languages": [{"code": "sw", "name": "Swahili (macrolanguage)"}, {"code": "en", "name": "English"}]}, {"countryCode": "TH", "country": "Thailand", "nativeName": "ประเทศไทย", "region": "asia_pacific", "languages": [{"code": "th", "name": "Thai"}]}, {"countryCode": "BS", "country": "The Bahamas", "nativeName": "Bahamas", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "GM", "country": "The Gambia", "nativeName": "Gambia", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "TG", "country": "Togo", "nativeName": "Togo", "region": "middle_east_africa", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "TK", "country": "Tokelau", "nativeName": "Tokelau", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "TO", "country": "Tonga", "nativeName": "Tonga", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}, {"code": "to", "name": "Tonga (Tonga Islands)"}]}, {"countryCode": "TT", "country": "Trinidad and Tobago", "nativeName": "Trinidad and Tobago", "region": "latin_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "TN", "country": "Tunisia", "nativeName": "تونس", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "TR", "country": "Turkey", "nativeName": "Türkiye", "region": "middle_east_africa", "languages": [{"code": "tr", "name": "Turkish"}]}, {"countryCode": "TM", "country": "Turkmenistan", "nativeName": "Türkmenistan", "region": "asia_pacific", "languages": [{"code": "tk", "name": "Turkmen"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "TV", "country": "Tuvalu", "nativeName": "Tuvalu", "region": "asia_pacific", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "UG", "country": "Uganda", "nativeName": "Uganda", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "sw", "name": "Swahili (macrolanguage)"}]}, {"countryCode": "UA", "country": "Ukraine", "nativeName": "Україна", "region": "europe", "languages": [{"code": "uk", "name": "Ukrainian"}]}, {"countryCode": "AE", "country": "United Arab Emirates", "nativeName": "دولة الإمارات العربية المتحدة", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "GB", "country": "United Kingdom", "nativeName": "United Kingdom", "region": "europe", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "US", "country": "United States", "nativeName": "United States", "region": "north_america", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "UY", "country": "Uruguay", "nativeName": "Uruguay", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "UZ", "country": "Uzbekistan", "nativeName": "O‘zbekiston", "region": "asia_pacific", "languages": [{"code": "uz", "name": "Uzbek"}, {"code": "ru", "name": "Russian"}]}, {"countryCode": "VU", "country": "Vanuatu", "nativeName": "Vanuatu", "region": "asia_pacific", "languages": [{"code": "bi", "name": "Bislama"}, {"code": "en", "name": "English"}, {"code": "fr", "name": "French"}]}, {"countryCode": "VE", "country": "Venezuela", "nativeName": "Venezuela", "region": "latin_america", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "VN", "country": "Vietnam", "nativeName": "Việt Nam", "region": "asia_pacific", "languages": [{"code": "vi", "name": "Vietnamese"}]}, {"countryCode": "GB", "country": "Wales", "nativeName": "Wales", "region": "other", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "WF", "country": "Wallis and Futuna", "nativeName": "Wallis et Futuna", "region": "asia_pacific", "languages": [{"code": "fr", "name": "French"}]}, {"countryCode": "EH", "country": "Western Sahara", "nativeName": "الصحراء الغربية", "region": "middle_east_africa", "languages": [{"code": "es", "name": "Spanish"}]}, {"countryCode": "YE", "country": "Yemen", "nativeName": "اليَمَن", "region": "middle_east_africa", "languages": [{"code": "ar", "name": "Arabic"}]}, {"countryCode": "ZM", "country": "Zambia", "nativeName": "Zambia", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}]}, {"countryCode": "ZW", "country": "Zimbabwe", "nativeName": "Zimbabwe", "region": "middle_east_africa", "languages": [{"code": "en", "name": "English"}, {"code": "sn", "name": "Shona"}, {"code": "nd", "name": "North Ndebele"}]}];

const regionOrder = [
    "north_america",
    "latin_america",
    "europe",
    "asia_pacific",
    "middle_east_africa",
    "other"
];

const copy = {
    en: {
        htmlLang: "en",
        title: "Country / Region | Kozma Shyti",
        portfolio: "Portfolio",
        kicker: "COUNTRY / REGION",
        heroBefore: "Choose your",
        heroAccent: "country or region.",
        intro: "Choose your country or region, then select the language you want to use on the portfolio.",
        search: "Search country, region or language...",
        directoryKicker: "GLOBAL DIRECTORY",
        directoryTitle: "Country / Region",
        countSuffix: "countries / regions",
        noResults: "No countries found.",
        rights: "All Rights Reserved",
        selected: "selected. Opening portfolio in",
        regions: {
            north_america: "United States & Canada",
            latin_america: "Latin America & Caribbean",
            europe: "Europe",
            asia_pacific: "Asia Pacific",
            middle_east_africa: "Middle East & Africa",
            other: "Other Regions"
        }
    },
    sq: {
        htmlLang: "sq",
        title: "Shteti / Rajoni | Kozma Shyti",
        portfolio: "Portfolio",
        kicker: "SHTETI / RAJONI",
        heroBefore: "Zgjidh",
        heroAccent: "shtetin ose rajonin.",
        intro: "Zgjidh shtetin ose rajonin dhe më pas gjuhën që dëshiron të përdorësh në portfolio.",
        search: "Kërko shtet, rajon ose gjuhë...",
        directoryKicker: "DIREKTORIA GLOBALE",
        directoryTitle: "Shteti / Rajoni",
        countSuffix: "shtete / rajone",
        noResults: "Nuk u gjet asnjë shtet.",
        rights: "Të gjitha të drejtat e rezervuara",
        selected: "u zgjodh. Portfolio po hapet në",
        regions: {
            north_america: "Shtetet e Bashkuara & Kanada",
            latin_america: "Amerika Latine & Karaibet",
            europe: "Europa",
            asia_pacific: "Azia Paqësore",
            middle_east_africa: "Lindja e Mesme & Afrika",
            other: "Rajone të tjera"
        }
    }
};

const pageLanguage =
    localStorage.getItem("language") === "sq"
        ? "sq"
        : "en";

const t = copy[pageLanguage];

const themeBtn =
    document.getElementById("languagesThemeBtn");

const searchInput =
    document.getElementById("countrySearch");

const regionsRoot =
    document.getElementById("countryRegions");

const count =
    document.getElementById("countryCount");

const empty =
    document.getElementById("countryEmpty");

const status =
    document.getElementById("countryStatus");

function text(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
}

document.documentElement.lang = t.htmlLang;
document.title = t.title;

text(".language-back", t.portfolio);
text(".language-kicker", t.kicker);
text(".language-intro", t.intro);
text(".language-section-kicker", t.directoryKicker);
text(".country-toolbar h2", t.directoryTitle);
text("#countryEmpty", t.noResults);
text(".page-rights", t.rights);

const heroTitle =
    document.querySelector(".language-hero h1");

if (heroTitle) {
    heroTitle.innerHTML =
        `${t.heroBefore} <span>${t.heroAccent}</span>`;
}

if (searchInput) {
    searchInput.placeholder =
        t.search;
}

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.textContent = "☀";
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const light =
            document.body.classList.contains("light");

        themeBtn.textContent =
            light ? "☀" : "☾";

        localStorage.setItem(
            "theme",
            light ? "light" : "dark"
        );
    });
}

function clearGoogleTranslateCookie() {
    document.cookie =
        "googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
}

function setGoogleTranslateCookie(code) {
    document.cookie =
        `googtrans=/en/${code};path=/;SameSite=Lax`;
}

function selectCountryLanguage(country, language) {
    localStorage.setItem(
        "countryCode",
        country.countryCode
    );

    localStorage.setItem(
        "countryName",
        country.country
    );

    localStorage.setItem(
        "language",
        language.code
    );

    localStorage.setItem(
        "languageName",
        language.name
    );

    if (
        language.code === "en" ||
        language.code === "sq"
    ) {
        clearGoogleTranslateCookie();
    } else {
        setGoogleTranslateCookie(
            language.code
        );
    }

    if (status) {
        if (pageLanguage === "sq") {
            status.textContent =
                `${country.country} ${t.selected} ${language.name}...`;
        } else {
            status.textContent =
                `${country.country} ${t.selected} ${language.name}...`;
        }
    }

    setTimeout(() => {
        window.location.href =
            "index.html";
    }, 320);
}

function countryMatches(country, query) {
    if (!query) return true;

    const haystack = [
        country.country,
        country.nativeName,
        country.countryCode,
        t.regions[country.region] || "",
        ...country.languages.map(item => item.name),
        ...country.languages.map(item => item.code)
    ]
        .join(" ")
        .toLocaleLowerCase();

    return haystack.includes(query);
}

function render(query = "") {
    const q =
        query
            .trim()
            .toLocaleLowerCase();

    const filtered =
        countries.filter(country =>
            countryMatches(country, q)
        );

    regionsRoot.innerHTML = "";

    regionOrder.forEach(regionKey => {
        const regionCountries =
            filtered.filter(
                country =>
                    country.region ===
                    regionKey
            );

        if (!regionCountries.length) {
            return;
        }

        const section =
            document.createElement("section");

        section.className =
            "region-section";

        const heading =
            document.createElement("div");

        heading.className =
            "region-heading";

        heading.innerHTML = `
            <h3>${t.regions[regionKey]}</h3>
            <span>${regionCountries.length}</span>
        `;

        const grid =
            document.createElement("div");

        grid.className =
            "country-grid";

        regionCountries.forEach(country => {
            const card =
                document.createElement("article");

            card.className =
                "country-card";

            const languageButtons =
                country.languages
                    .map(language => `
                        <button
                            type="button"
                            class="country-language"
                            data-country="${country.countryCode}"
                            data-language="${language.code}"
                        >
                            ${language.name}
                        </button>
                    `)
                    .join("");

            card.innerHTML = `
                <span class="country-code">
                    ${country.countryCode}
                </span>

                <div class="country-copy">
                    <strong>${country.country}</strong>
                    <div class="country-native">
                        ${country.nativeName}
                    </div>

                    <div class="country-languages">
                        ${languageButtons}
                    </div>
                </div>
            `;

            card
                .querySelectorAll(
                    ".country-language"
                )
                .forEach(button => {
                    button.addEventListener(
                        "click",
                        () => {
                            const language =
                                country.languages.find(
                                    item =>
                                        item.code ===
                                        button.dataset.language
                                );

                            if (language) {
                                selectCountryLanguage(
                                    country,
                                    language
                                );
                            }
                        }
                    );
                });

            grid.appendChild(card);
        });

        section.appendChild(heading);
        section.appendChild(grid);
        regionsRoot.appendChild(section);
    });

    if (count) {
        count.textContent =
            `${filtered.length} ${t.countSuffix}`;
    }

    if (empty) {
        empty.hidden =
            filtered.length !== 0;
    }
}

render();

if (searchInput) {
    searchInput.addEventListener(
        "input",
        () => render(searchInput.value)
    );
}
