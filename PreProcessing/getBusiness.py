import json

amer_business_id_list =["WElec_bplWbp2aRcY-VJZA"
"baIT89GubjGJV1mpn82Eeg",
"9TWQ9TDxC11oJat-W5AIhA",
"CrM_FY9NIoDWudQYHlO7UQ",
"T0ea32kBf7L33XUhIdwjbA",
"JhEtJbGjAqKDHCZ11i3qoQ",
"_xgxCB0OY0PmlSL4FFBBZg",
"B1TlRyjCW3Ygkp95MACffA",
"qMJCVx6-ZYvZQHlfrZ_cug",
"tnvZOd2vNCLPQS1KEZxqog",
"sWeVNiPulXsD8PWhEtn9Ew",
"_287i8ZeEf0H1LiqPhyvBg",
"CpJRzbebSyHwOFNsOixK1w",
"ZKWGMUV_XqxtISRcDGUnrA",
"UUtWoDyREiy9MPdtTRFUYQ",
"cmsAFAymfVoBitSF8R6GKw",
"tK-PQOhZo94fonbQVXaOSg",
"omisgpMWACc0eL6rKGjAGQ",
"Fif1uzIU95ttv6kbtRg0ZA"]

chinese_list = ["WElec_bplWbp2aRcY-VJZA",
"baIT89GubjGJV1mpn82Eeg"
"9TWQ9TDxC11oJat-W5AIhA"
"CrM_FY9NIoDWudQYHlO7UQ"
"T0ea32kBf7L33XUhIdwjbA"
"JhEtJbGjAqKDHCZ11i3qoQ"
"_xgxCB0OY0PmlSL4FFBBZg"
"B1TlRyjCW3Ygkp95MACffA"
"qMJCVx6-ZYvZQHlfrZ_cug"
"tnvZOd2vNCLPQS1KEZxqog"
"sWeVNiPulXsD8PWhEtn9Ew"
"_287i8ZeEf0H1LiqPhyvBg"
"CpJRzbebSyHwOFNsOixK1w"
"ZKWGMUV_XqxtISRcDGUnrA"
"UUtWoDyREiy9MPdtTRFUYQ"
"cmsAFAymfVoBitSF8R6GKw"
"tK-PQOhZo94fonbQVXaOSg"
"omisgpMWACc0eL6rKGjAGQ"
"Fif1uzIU95ttv6kbtRg0ZA"
"cPEo3-TmIqCwHLFGKZgwGg"]

thai_list = ["g_6gQKZxj9HHbTa1OaUtnQ",
"miySsDV_1YKS3EqqGwblQQ",
"w3RH9W99ZIKvw0Qgibdn4w",
"GJ9CgvTBKaDb9qLFEBbzHg",
"vMnB2Cz3c1Io1IEyeLLVOA",
"EyE2NntpQyVPaLX7gSC9dA",
"f25NsTObxX0NEhBVm44-GA",
"C6MG3vrloHF8h9PPvZNiJA",
"7eJ5j1paJciRBPbRYU8u1A",
"JNlxqS6xX5qgsb90eDu8TQ",
"4-Ub64zwqopWZeOFsTYTzA",
"uKF_BmC-FwOLY-7Gtm1OSg",
"l3bmBkr8_Pw3G-QkX0tPrw",
"uoZwJJaplLsktVrRw0JiQw",
"8-F2JKHSCbgLQ55JxGU9gg",
"B5E_Qp3R1q0oRlzbYaWIkQ",
"7eEfpzUTAd1hAxXKlLQaJA",
"9vn0tLOpiGjSUp_mCI0ZLA"]

mid_east = ["Er2XAYN8l1BadlYFwiPb9g",
"9SaFi9c_imgP8LqeJC1YEA",
"zNGJKwCV6r1BzA4pm3eC5Q",
"0ccI-aZfoqD4PteESpfShg",
"len2nrEtgD9bjnoYSyLPjA",
"ahfAFuFHO9tfFkoBIkVdmg",
"X1S8u_cFfBpdWfvQBo_BqA",
"_BJdRw73rGb35ofd3ElTUA",
"kO1-ZswCgQak2beKUMaYRw",
"Ofr0PzgcDOv9Fy5xqsbGhQ",
"bJWujT6cMgdUP-aXy6AitQ",
"EFHpf_-SPzShCYiS-nMPWw",
"OwZM33ZI8LZVknaLICWIhw",
"YbweWBgYj9T3VqMFJcQlOw",
"6-ZXctu-Duee3rGY3lC-uQ",
"njaKms2uQcdTtlI0urqPaA",
"W5l5_CmHd-n1CDTHdEkYTw",
"YZGAUc8CaWWc6ICSfeecoA",
"HyzHidtQXC4JIULtSbk3NA",
"CyaiHieU5WcosKWIwyOX9g"]

mexican = ["9MVKjEMN5T59uzG1xoD2BQ",
"keChsvTIWsPUc4KX-ayRVw",
"e-VnK6aV87kpu1dMQJB7fQ",
"DmAKN7KxGLFXGqAk23EDHg",
"CIU0NCEOof6qF6AasxUvTA",
"dddUz7IweLuFYelc3ZIyNA",
"02eESJZNF3qigrJ3GNRgIQ",
"VoTi4yVhTVyFdmxUpoyUsg",
"gT4gngtGKYOW-jl5UIBahg",
"M9aTtOeOIG-EOLeHNgkKfQ",
"Scs-a2ybPdeT_mb7uZyLkQ",
"A2eA3LRbptrexCGw8fu67Q",
"pNSHrFBlwWgTY9es9sdEWA",
"ETSHD1lX0xcd2qInwiXxzA",
"wOw-YvucvqNHDhwltGsNpQ",
"RZjCS8U_UuZaAmo5YawkOg",
"9OX_55wAPyuKKI6Zdp7qag",
"_H4GXECi4nHfJTz4dsQV_w",
"twrgw3ZaMEiS87sN5ahuuw",
"IcSr0gUNSgVvjsgqSEKnbw"]

mediterranean = ["_lD9Y_0OfzZjfz5s-FVwqQ",
"Q8GBjqGjamI3b2ZaPQNa_Q",
"Y3awsAE8mFdCG8nwEXWF8w",
"YR202Rbw0E4aiUJNeAJjOg",
"WPmOztfJVgOq04rwPIQTUg",
"Lsy_RA1xk9qHFLzLNWKBww",
"SKQU3a1CbX3mHxilRvM3GQ",
"L3Wbv_0hHpW1Izi2li6Ugw",
"6zkpirZ4qCfsbd33unJ5nQ",
"GQxpWDw3MuCwAMV9BA-62w",
"cq6SQkWKVT3TH-6YzGFn4g",
"G8k2E3oYHHl2o4lNJQwR-g",
"AW66lAeZQW3ss38HjB9ZaA",
"6Cl15LapBVhw4ZfBIeVJJA",
"a6asAPtLHfWG871UBizACw",
"SJbXs2aVMhFawgjCcbH8aQ",
"89Eqssb01O4-3-btGyvXoQ",
"llCxryWr8j1S39tusYCWxg",
"DGOWO87MQmA4-2swRLK2DA"]

japanese = ["dl6mrYTQQoj03Im_Nntixw",
"J9kvWCw5FGTCjEFBaB0nEw",
"4gwh0q7JsdzHIm_pdYUlZg",
"J7rkQISD48jXgdM6UxNAbw",
"gU7xFSbbu9KX4OSBhG9ElA",
"SfvxPlsZrvyPXbuAW8KCMw",
"U5ZlFP1kBFzlmnaIn1f9sQ",
"2r6UD7ExSMrK0LGeglquDA",
"7NXSKpruXOrm9_INkZAFEQ",
"R_M4P9XetEM-aLE7eHdthw",
"3b-jZX9Ms0U9B2Oy_ZmNMA",
"fI9ErCUGY8rXRPBbatcxMA",
"3HU3V2AYuVUxdd_Q5Nv5Vw",
"IEVrILZ7bkuJMYKsbAfWaQ",
"oZcbn7ENit23xbCsyu9xbA",
"Wg4jlAgOUB51aX1c3ex9GQ",
"R1oI13c1oNxE91wkjYDeow",
"Ij6Q806LeOvFt3XWVpJ9sg",
"J8hNZEebgXK8-LWBXHVInA",
"35Z23ZztQCsJdASRbU69Vg"]

italian = ["GzYAIjVULpRrFV2dQMKDog",
"Eb97gjJ6mkcx7Y-tFObjEw",
"tR4VVIdzcJCQus4GUFq3IA",
"scoJNOqcw2peNlO31UYTaA",
"Mnu3EPpuzu3UUN1PIwFRoQ",
"pt7p4klGicvPZe04mhhVGQ",
"VRC7J-ahI4em9ddhihxq5w",
"2ehEw8EFYVwefZTxDeiERw",
"_e3rChyednoh47n2cjGv2w",
"dhaSDuAoZI0K3hp8aU7otQ",
"c33m1IMz1N7S1-sqTbsqRA",
"6Leb5-5Wl7OfPM12LaFQeA",
"CCs5domumJRZ3-Blpt8jTw",
"Ks13abA-KZWAA6FMQagQmg",
"3h9K-ZsuG0PwhmyiPrXKhA",
"ZVtjS8Hvq2a6SxHxlehPGg",
"vlc_yP8dfz8CGE6JRMKBZA",
"4qQVf2lt-47VcQ4v54PEXQ",
"rAxKaT0cCtOuUaSt0x8pQg",
"e_BiI4ej1CW1F0EyVLr-FQ"]

indian = ["prFx0Kg92PfPkoU8OY4KxA",
"XANbZSZLGPSMV1QPzPXVtw",
"RU6E7WsAfsTRcjXxH1Lo5A",
"iE71iwcSljg3xm2GB2Y9aA",
"KvRh-exPg_KegOM_HXeskw",
"LFfYe-hh1NKFtUKV3LUgfg",
"CNx_ie_OvjJHZLZ6yEO8UA",
"yfHYCkQaupRzWU8FIgxUPg",
"x1GM1mzeDx4ARUGKV8n98Q",
"PQTtKaBK_WdvLm-zp4fQ1g",
"zNGYsFeG_7XEBodbtfux5Q",
"VoHTd4QkPGWXl6IGI72isQ",
"TAnzFr9NixvCbvUdJMWL5Q",
"KfxPrJ5PzgFRm2XltnbBLQ",
"GiDPLKtTfNHTb0koEWIz2g",
"_DiGwfdiH913E4LURwb2qg",
"TElfyEowMFTPR1gAwMLcNQ",
"AgnnYOtOmSr3W_vUmSIeaw",
"QT4Ub4DlaDX52vdnKutD0A",
"q7T-qCW0WLemnnLt88OuWQ"]

french = ["kYATtIsqVEoawS47UcSlDA",
"K64Uw3a2Enh2MznpwRHWKQ",
"-4TMQnQJW1yd6NqGRDvAeA",
"Tl2nqtPXlLbAG3qkUYVM2g",
"ohMpNug5zWNxOlL6ShG7Ig",
"atNpoWy_XrhT9EUIEP6azg",
"0d6kx6Jlocw77y1J9nbqMA",
"b3wgQ6CccBO8fgvlbS0M1Q",
"OZC42gnhlJ_auXduDRfMoQ",
"L7wtHDiTtp6S_DzjJaXwoQ",
"eb7wb5yABe12tSoeCpLSbw"]

businesses = dict()
with open('business.json', 'rb') as f:
    lines = f.readlines()
business_list = map(lambda x: x.rstrip(), lines)

for d in business_list:
  data = json.loads(d)
  #print(data['business_id'])
  if(data['business_id'] in french):
    name = data['name']
    print("[\""+name+"\",\""+data['business_id']+"\"]")

  
  
    business_data'business_id'] = data'business_id']
    business_data'business_name'] = data'name']
    json_data = json.dumps(business_data)
    with open("processed_business", 'a+') as f:
      json.dump(json_data, f)

#print(businesses)

for b in businesses:
  p= open("reviews/"+businessesb]+".txt","w+")
  p.close()
  p= open("reviews/"+businessesb]+".txt","a+")
  with open('review.json', 'rb') as f:
      lines = f.readlines()
  review_list = map(lambda x: x.rstrip(), lines)
  for d in review_list:
    data = json.loads(d)
    if(data'business_id']==businessesb]):
      #print(data'text'])
      p.write(str(data'text'])+"\n")
  p.close()
  

#c7JoAt6a3Ufkpn3TrGU23A






