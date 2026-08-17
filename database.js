// ================= EXTENDED ECOSYSTEM DATA: PART 1 =================
var plantPets = {
  sprout: "🐛", cactus: "🦎", flower: "🦋", orchid: "🐝", rose: "🐞",
  tulip: "🐌", bamboo: "🐼", bonsai: "🦉", mushroom: "🦔", clover: "🐇",
  fern: "🐸", maple: "🐿️", palm: "🦜", venus: "🕷️", berry: "🦝"
};

var maps = {
  f1: {"A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ","a":"𝕒","b":"𝓕","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫"},
  f2: {"A":"𝔄","B":"𝔅","C":"  ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","V":"𝔙","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ","a":"𝔞","b":"𝔟","c":"𝔔","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷"},
  f3: {"A":"𝓠","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓿","Y":"加入","Z":"𝓩","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":" get","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃"}
};

var plantData = {
  sprout: {
    desc: "A soft sprout standard seedling.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌱","(🌱_🌱)","(•‿•)🌱","(〃‿〃)✿","(˘³˘)🌿","(o^▽^o)","(─‿─)","(✧ω✧)","(◕‿◕)","(シ. .)シ","(っ˘ω˘ς)","( ´▽` )","(っ﹒︠ᴗ﹒︡)っ","(◍•ᴗ•◍)","(〃^▽^〃)","( ˙꒳˙ )"]
  },
  cactus: {
    desc: "A spiked prickly desert dweller.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🌵","(🌵_🌵)","(•̀⤙•́)🌵","(⚔️_⚔️)","(ง'̀-'́)ง","(╬皿╬)","(`^´)","(☄️_☄️)","(•̀⤙•́)","(▀̿Ĺ̯▀̿ ̿)","(ง •̀_•́)ง","┌∩┐(◣_◢)","(𓁹_𓁹)","(ಠ_ಠ)","(；′⌒`)","(⁎˃⌊˂⁎)"]
  },
  flower: {
    desc: "A glowing, sun-loving cheerful bloom.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🌻","(🌻_🌻)","(◕‿◕✿)","(✨‿✨)","(✿◠‿◠)","(💖‿💖)","(つ✧ω✧)つ","(⺣◡⺣)♡*","(✿❦‿❦)","(人•͈ᴗ•͈)","(〃▽〃)","(☆▽☆)","(*^ω^*)","(≧◡≦)","(🌸◠‿◠)","(𓆩♡𓆪)"]
  },
  orchid: {
    desc: "An exotic purple orchid bloom.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌸","(🌸_🌸)","(☯‿☯)","(👁️_👁️)","(𓁹‿𓁹)","(✧_✧)","( ° 👁️ °)","(✷‿✷)","(つ✧▽✧)つ","(❦‿❦)","(ꏿ﹏ꏿ)","(❍ᴥ❍ʋ)","(☉_☉)","(⚆_⚆)","( ఠ ͟ʖ ఠ)","(•̪●)"]
  },
  rose: {
    desc: "A deep red classic romantic rose stem.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🌹","(🌹_🌹)","(❤‿❤)","(✿𓁹‿𓁹)","(๑♡⌓♡๑)","(｡♥‿♥｡)","(♡ω♡*)","(✿ ♡‿♡)","(′▽`〃)♡","(づ￣ ³￣)づ","( ́ ∋ ́)","(♥ω♥*)","(๑˘ᵕ˘)","(ღ˘⌣˘ღ)","(◌^▽^◌)","( ´ ▽ ` )ﾉ"]
  },
  tulip: {
    desc: "A gentle pastel colored spring tulip.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🌷","(🌷_🌷)","(˘ᵕ˘)✿","(ˊᵕˋ)","(𓂂ᵕ𓂂)","(◍ꂚ◍)","(｡•ㅅ•｡)","(๑•᎑•๑)","( . •́ _ •̀ . )","( ˙▿˙ )","( ˶ˆ꒳ˆ˵ )","( ˊᵕˋ )♡","(„• ֊ •„)","(。U ω U。)","(๑ᵔ⤙ᵔ๑)","(* ´ ` *)"]
  },
  bamboo: {
    desc: "Fast growing segmented tall bamboo shoots.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🎍","(🎍_🎍)","(•ᴥ•)","🐼","(￣(oo)￣)","(ˆ 🎞️ ˆ)","(𓃟)","(꜆˶ᵔᵕᵔ˶)꜆","( 𓃠 )","(•⚇•)","(◕ܫ◕)","(✧ܫ✧)","( ´(oo)ˋ )","(ᵔᴥᵔ)","(•̀⤙•́)🐼","(=^･ω･^=)"]
  },
  bonsai: {
    desc: "A miniaturized carefully sculpted ancient tree.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌳","(🌳_🌳)","(𓁹_𓁹)","(─‿─)","(🧘)","(˘_˘)","(◡_◡)","(𓆗)","(๑˘ᵕ˘)","( 🧘‍♂️ )","( •_•)","(⇀_⇀)","(ー_ー)","( 一一)","( 𓁺 𓁺 )","(˘◡˘)"]
  }
};
// ================= EXTENDED ECOSYSTEM DATA: PART 2 =================
Object.assign(plantData, {
  mushroom: {
    desc: "A colorful spotted cap forest mushroom.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🍄","(🍄_🍄)","(🥴)","(👁️👄👁️)","(🤪)","(✧ω✧)","(★ω★)","(⊙_⊙)","(ʘ‿ʘ)","(ꏿ_ꏿ)","(🤯)","(✧﹃ ✧)","(★﹃ ★)","( 😵‍💫 )","( ಡ_ಡ )","(ʘ╻ʘ)"]
  },
  clover: {
    desc: "A super rare lucky four-leaf clover sprig.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🍀","(🍀_🍀)","(💸_💸)","(🤑)","(🎰)","(✧▽✧)","(💰‿💰)","(👉🖨️)","(🌟‿🌟)","(⭐_⭐)","(🎯)","(💎‿💎)","(🎩)","(  ✨ )","(∩^o^)⊃━☆","(っ🔥‿🔥)っ"]
  },
  fern: {
    desc: "Feathery wild green jungle fern leaves.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌿","(🌿_🌿)","(🐊)","(🦖)","(🦎)","(🌴)","(𓆏)","(𓆗)","(𓆈)","(𓅭)","(🛸)","(🪵)","(𓃰)","(𓄿)","(𓅓)","(𓆲)"]
  },
  maple: {
    desc: "An autumn colored brilliant crimson maple branch.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🍁","(🍁_🍁)","(🍂)","(☕)","(🧣)","(˘ᵕ˘)","( 🍵 )","(｡◕‿◕｡)","(っ˘ڡ˘ς)","( ´ρ`)","(●´ω｀●)","( ′～′)","(◌^▽^◌)","( ´∀`)","( 🍁 ‿ 🍁 )","( ☕ _ ☕ )"]
  },
  palm: {
    desc: "A tropical breezy layout ocean coast palm frond.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🌴","(🌴_🌴)","(🕶️)","(🏄)","(🥥)","(🍍)","(🍹)","(𓆉)","(🏖️)","(🦈)","(𓆝)","(𓆟)","(𓟿)","(🌊)","(𓄿)","(☀️)"]
  },
  venus: {
    desc: "A snap-shut carnivorous active fly trap plant.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌱","(👹)","(💀)","(Ψ)","(◣_◢)","(𓆦)","(𓆨)","(𓆣)","(𓆧)","(🔥_🔥)","(╬ﾟ◥益◤ﾟ)","(ಠ益ಠ)","( 𓃓 )","( 𓄿 )","( 𓃠 )","( 💢 )"]
  },
  berry: {
    desc: "A wild vine bursting with juicy forest berries.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🍓","(🍓_🍓)","(🍇)","(🍒)","(🍰)","(っ˘ڡ˘ς)","(〃^▽^〃)","(๑>◡<๑)","(≧ڡ≦)","(￣▽￣)","(o^ ^o)","(っ﹒︠ᴗ﹒︡)っ","(〃▽〃)","( ˙▿˙ )","( ˶ˆ꒳ˆ˵ )","( 🍓 ‿ 🍓 )"]
  }
});
