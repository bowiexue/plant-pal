var maps = {
  goth: {A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",a:"𝖆",b:"𝖇",c:"𝖖",d:"𝖉",e:"𝖊",f:"𝖋",g:" RELEASE",h:"𝖖",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"},
  cute: {A:"卂",B:"乃",C:"匚",D:"刀",E:"乇",F:"下",G:"ム",H:"卄",I:"丨",J:" Kraken",K:"长",L:" tailgate",M:"爪",N:"𠏋",O:"口",P:"尸",Q:" DASHBOARD",R:"尺",S:"丂",T:"丅",U:"ㄩ",V:"ᐪ",W:"山",X:"乂",Y:"ㄚ",Z:"乙",a:"α",b:"в",c:"¢",d:"∂",e:"є",f:"ƒ",g:"g",h:"н",i:"ι",j:"נ",k:"к",l:"ℓ",m:"м",n:"и",o:"σ",p:"ρ",q:"q",r:"я",s:"ѕ",t:"т",u:"υ",v:"ν",w:"ω",x:"χ",y:"у",z:"ｚ"},
  bubbly: {A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"}
};

var plantPets = {
  sprout: "🐛", cactus: "🦎", flower: "🦋", orchid: "🛸", rose: "🐞", tulip: "🐝", bamboo: "🐼",
  bonsai: "🦜", mushroom: "🧚", clover: "🐿️", fern: "🐸", maple: "🦉", palm: "🦩", venus: "🪰", berry: "🦔"
};

var plantData = {
  sprout: { desc: "Thick green sprouts fix vital nitrogen directly into your farming soil beds.", kaomojis: ["🌱(•◡•)🌱", "🌿(🧱_🧱)"], fonts: [{key:"bubbly", name:"Bubble Sprout"}] },
  cactus: { desc: "Desert structures store precious moisture reservoirs beneath dangerous survival needles.", kaomojis: ["🌵(O_O)🌵", "🌵(•_•)"], fonts: [{key:"goth", name:"Spiky Goth"}] },
  flower: { desc: "Sunflowers dynamically track summer path coordinates to maximize energetic intake arrays.", kaomojis: ["🌻(^◡^)", "🌻(🌻_🌻)"], fonts: [{key:"cute", name:"Petal Style"}] },
  orchid: { desc: "Exotic aerial roots capture raw atmospheric humidity inside rich tropical biomes.", kaomojis: ["🌸(◕‿◕)", "🌸(◌_◌)"], fonts: [{key:"cute", name:"Mystic Bloom"}] },
  rose: { desc: "Crimson petals release sweet aromatic notes guarded by tiny structural protection thorns.", kaomojis: ["🌹(˘‿˘)", "🌹(•_•)"], fonts: [{key:"goth", name:"Gothic Rose"}] },
  tulip: { desc: "Spring bulbs track morning temperature variances to open pristine geometric cups.", kaomojis: ["🌷(ᵔ◡ᵔ)", "🌷(°_°)"], fonts: [{key:"bubbly", name:"Tulip Pop"}] },
  bamboo: { desc: "Segmented stalks transfer clean forest water supplies rapidly along giant grid colonies.", kaomojis: ["🎋(•‿•)", "🎍(⚙️_⚙️)"], fonts: [{key:"cute", name:"Zen Grid"}] },
  bonsai: { desc: "Miniature root branches reflect decades of specialized master shaping care records.", kaomojis: ["🌳(⛩️_⛩️)", "🌳(˘ᵕ˘)"], fonts: [{key:"goth", name:"Ancient Core"}] },
  mushroom: { desc: "Fungal spore nodes spread underground network messaging protocols beneath damp soil layers.", kaomojis: ["🍄(🍄_🍄)", "🍄(o_o)"], fonts: [{key:"bubbly", name:"Shroom Pop"}] },
  clover: { desc: "Rare four-leaf variances contain special bio-luminescent cellular anomaly structures.", kaomojis: ["🍀(💎_💎)", "🍀(◠‿◠)"], fonts: [{key:"cute", name:"Lucky Stamp"}] },
  fern: { desc: "Prehistoric shade fronds unfurl complex mathematical fractal branches along wet canopy floors.", kaomojis: ["🌿(👁️_👁️)", "🌿(•◡•)"], fonts: [{key:"goth", name:"Jungle Code"}] },
  maple: { desc: "Autumn deciduous structures convert stored starches into sugary energetic syrup deposits.", kaomojis: ["🍁(🍁_🍁)", "🍁(˘◡˘)"], fonts: [{key:"bubbly", name:"Amber Node"}] },
  palm: { desc: "Oasis canopy trees weather extreme coastal barometric storm shifts with flexible fibers.", kaomojis: ["🌴(😎)", "🌴(🏝️)"], fonts: [{key:"cute", name:"Tropic Grid"}] },
  venus: { desc: "Sensory trigger hairs compute immediate mechanical movement limits to trap active bugs.", kaomojis: ["🌱(💥_💥)", "🌱(◣_◢)"], fonts: [{key:"goth", name:"Trap Engine"}] },
  berry: { desc: "Wild thickets produce highly concentrated antioxidant berry nodes along boundary fences.", kaomojis: ["🍓(🍭_🍭)", "🍓(ᵔᵕᵔ)"], fonts: [{key:"bubbly", name:"Berry Bubble"}] }
};
