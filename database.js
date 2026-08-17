var maps = {
  goth: {A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",a:"𝖆",b:"𝖇",c:"𝖖",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖖",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"},
  cute: {A:"卂",B:"乃",C:"匚",D:"刀",E:"乇",F:"下",G:"ム",H:"卄",I:"丨",J:" Kraken",K:"长",L:" tailgate",M:"爪",N:"𠏋",O:"口",P:"尸",Q:" DASHBOARD",R:"尺",S:"丂",T:"丅",U:"ㄩ",V:"ᐪ",W:"山",X:"乂",Y:"ㄚ",Z:"乙",a:"α",b:"в",c:"¢",d:"∂",e:"є",f:"ƒ",g:"g",h:"н",i:"ι",j:"נ",k:"к",l:"ℓ",m:"м",n:"и",o:"σ",p:"ρ",q:"q",r:"я",s:"ѕ",t:"т",u:"υ",v:"ν",w:"ω",x:"χ",y:"у",z:"ｚ"},
  bubbly: {A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"},
  cursive: {A:"𝒜",B:"ℬ",C:"𝒞",D:"𝒟",E:"ℰ",F:"ℱ",G:"𝒢",H:"ℋ",I:"ℐ",J:"𝒥",K:"𝒦",L:"ℒ",M:"ℳ",N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"ℛ",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",Y:"𝒴",Z:"𝒵",a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"ℯ",f:"𝒻",g:"ℊ",h:"𝒽",i:"𝒾",j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"ℴ",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏"},
  brackets: {A:"【A】",B:"【B】",C:"【C】",D:"【D】",E:"【E】",F:"【F】",G:"【G】",H:"【H】",I:"【I】",J:"【J】",K:"【K】",L:"【L】",M:"【M】",N:"【N】",O:"【O】",P:"【P】",Q:"【Q】",R:"【R】",S:"【S】",T:"【T】",U:"【U】",V:"【V】",W:"【W】",X:"【X】",Y:"【Y】",Z:"【Z】",a:"【a】",b:"【b】",c:"【c】",d:"【d】",e:"【e】",f:"【f】",g:"【g】",h:"【h】",i:"【i】",j:"【j】",k:"【k】",l:"【l】",m:"【m】",n:"【n】",o:"【o】",p:"【p】",q:"【q】",r:"【r】",s:"【s】",t:"【t】",u:"【u】",v:"【v】",w:"【w】",x:"【x】",y:"【y】",z:"【z】"}
};

var plantPets = {
  sprout: "🐛", cactus: "🦎", flower: "🦋", orchid: "🛸", rose: "🐞", tulip: "🐝", bamboo: "🐼",
  bonsai: "🦜", mushroom: "🧚", clover: "🐿️", fern: "🐸", maple: "🦉", palm: "🦩", venus: "🪰", berry: "🦔"
};

var plantData = {
  sprout: { desc: "Thick green sprouts fix vital nitrogen directly into your farming soil beds.", kaomojis: ["🌱(•◡•)🌱", "🌿(🧱_🧱)", "🌱(🪐_🪐)🌱", "🌱(˘ᵕ˘)🌱"], fonts: [{key:"bubbly", name:"Bubble"},{key:"cursive", name:"Script"},{key:"brackets", name:"Block"}] },
  cactus: { desc: "Desert structures store moisture reservoirs beneath protective needles.", kaomojis: ["🌵(O_O)🌵", "🌵(•_•)", "🌵(◣_◢)🌵", "🌵(╥﹏╥)🌵"], fonts: [{key:"goth", name:"Spiky"},{key:"brackets", name:"Block"}] },
  flower: { desc: "Sunflowers dynamically track summer path coordinates to maximize solar intake.", kaomojis: ["🌻(^◡^)", "🌻(🌻_🌻)", "🌻(☀️_☀️)🌻", "🌻(🕶️_🕶️)"], fonts: [{key:"cute", name:"Petal"},{key:"cursive", name:"Script"}] },
  orchid: { desc: "Exotic aerial roots capture raw atmospheric humidity inside tropical biomes.", kaomojis: ["🌸(◕‿◕)", "🌸(◌_◌)", "🌸(🍧_🍧)🌸", "🌸(💎_💎)"], fonts: [{key:"cute", name:"Mystic"},{key:"bubbly", name:"Bubble"}] },
  rose: { desc: "Crimson petals release sweet aromatic notes guarded by tiny thorns.", kaomojis: ["🌹(˘‿˘)", "🌹(•_•)", "🌹(🖤_🖤)🌹", "🌹(⚔️_⚔️)"], fonts: [{key:"goth", name:"Goth"},{key:"cursive", name:"Script"}] },
  tulip: { desc: "Spring bulbs track morning temperature variances to open pristine geometric cups.", kaomojis: ["🌷(ᵔ◡ᵔ)", "🌷(°_°)", "🌷(🎈_🎈)🌷", "🌷(🧁_🧁)"], fonts: [{key:"bubbly", name:"Pop"},{key:"brackets", name:"Block"}] },
  bamboo: { desc: "Segmented stalks transfer forest water supplies rapidly along giant colonies.", kaomojis: ["🎋(•‿•)", "🎍(⚙️_⚙️)", "🎋(🧘_🧘)🎋", "🎍(🎋_🎋)"], fonts: [{key:"cute", name:"Zen"},{key:"cursive", name:"Script"}] },
  bonsai: { desc: "Miniature root branches reflect decades of specialized master shaping care.", kaomojis: ["🌳(⛩️_⛩️)", "🌳(˘ᵕ˘)", "🌳(⏳_⏳)🌳", "🌳(👑_👑)"], fonts: [{key:"goth", name:"Ancient"},{key:"brackets", name:"Block"}] },
  mushroom: { desc: "Fungal spore nodes spread underground network messaging protocols.", kaomojis: ["🍄(🍄_🍄)", "🍄(o_o)", "🍄(✨_✨)🍄", "🍄(🧪_🧪)"], fonts: [{key:"bubbly", name:"Shroom"},{key:"cursive", name:"Script"}] },
  clover: { desc: "Rare four-leaf variances contain bio-luminescent cellular anomaly structures.", kaomojis: ["🍀(💎_💎)", "🍀(◠‿◠)", "🍀(⭐_⭐)🍀", "🍀(🎰_🎰)"], fonts: [{key:"cute", name:"Lucky"},{key:"bubbly", name:"Bubble"}] },
  fern: { desc: "Prehistoric shade fronds unfurl complex mathematical fractal branches.", kaomojis: ["🌿(👁️_👁️)", "🌿(•◡•)", "🌿(🦖_🦖)🌿", "🌿(🧭_🧭)"], fonts: [{key:"goth", name:"Jungle"},{key:"brackets", name:"Block"}] },
  maple: { desc: "Autumn trees convert stored starches into sugary syrup deposits.", kaomojis: ["🍁(🍁_🍁)", "🍁(˘◡˘)", "🍁(☕_☕)🍁", "🍁(🥞_🥞)"], fonts: [{key:"bubbly", name:"Amber"},{key:"cursive", name:"Script"}] },
  palm: { desc: "Oasis canopy trees weather extreme coastal storm shifts with flexible fibers.", kaomojis: ["🌴(😎)", "🌴(🏝️)", "🌴(🍹_🍹)🌴", "🌴(☀️_☀️)"], fonts: [{key:"cute", name:"Tropic"},{key:"brackets", name:"Block"}] },
  venus: { desc: "Sensory trigger hairs compute movement limits to trap active bugs.", kaomojis: ["🌱(💥_💥)", "🌱(◣_◢)", "🌱(👹_👹)🌱", "🌱(🩸_🩸)"], fonts: [{key:"goth", name:"Trap"},{key:"cursive", name:"Script"}] },
  berry: { desc: "Wild thickets produce highly concentrated antioxidant berry nodes.", kaomojis: ["🍓(🍭_🍭)", "🍓(ᵔᵕᵔ)", "🍓(🥧_🥧)🍓", "🍓(🧺_🧺)"], fonts: [{key:"bubbly", name:"Berry"},{key:"brackets", name:"Block"}] }
};
