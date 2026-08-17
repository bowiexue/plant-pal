// ================= EXTENDED ECOSYSTEM DATA LOGS: PART 1 =================
var plantPets = {
  sprout: "🐛", cactus: "🦎", flower: "🦋", orchid: "🐝", rose: "🐞",
  tulip: "🐌", bamboo: "🐼", bonsai: "🦉", mushroom: "🦔", clover: "🐇",
  fern: "🐸", maple: "🐿️", palm: "🦜", venus: "🐱", berry: "🦝"
};

var maps = {
  f1: {"A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ","a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫"},
  f2: {"A":"𝔄","B":"𝔅","C":"  ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","V":"𝔙","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ","a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷"},
  f3: {"A":"𝓿","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓿","Y":"𝓨","Z":"𝓩","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓦","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃"}
};

var plantData = {
  sprout: {
    desc: "The basic green seedling represents the humble beginnings of organic life. It breaks through soft soil using its tiny primary cotyledons to absorb ambient sunshine. This delicate sprout requires highly regular watering schedules and gentle warmth to build structural roots before it transitions into advanced architectural growth phases.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🌱","(•‿•)🌱","(˘³˘)🌿","(o^▽^o)","(✧ω✧)","(◕‿◕)","(っ˘ω˘ς)","( ´▽` )","(◍•ᴗ•◍)","(〃^▽^〃)","( ˙꒳˙ )","(๑˃̵ᴗ˂̵)","(◠‿◠)","(*'▽'*)","(っ.❛ ᴗ ❛.)っ","(•◡•)"]
  },
  cactus: {
    desc: "An incredibly resilient arid desert organism built to endure severe drought and extreme heat fluctuations. Its thick succulent stem is engineered for massive internal water preservation, while its external defense network of sharp protective needles minimizes moisture evaporation. It serves as a reminder that life can thrive in the harshest environments.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🌵","(•̀⤙•́)🌵","(`^´)","(ง •̀_•́)ง","(ಠ_ಠ)","(⁎˃⌊˂⁎)","(•̀_•́)","(￣^￣)","( ` ω ´ )","(⇀_⇀)","(ง'̀-'́)ง","(ง°ل͜°)ง","(•ิ_•ิ)","(¬_¬)","(¯_¯)","(^_^)"]
  },
  flower: {
    desc: "A bright heliotropic sunflower designed to seek out and follow radiant light streams across the sky. Its massive cheerful golden crown acts as an open ecological hub for visiting local pollinators. This fast-growing flower thrives when placed under direct noon sun exposure, pumping nutrients upward through its thick fibrous stalk.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🌻","(◕‿◕✿)","(✨‿✨)","(✿◠‿加)","(💖‿💖)","(⺣◡⺣)","(人•͈ᴗ•͈)","(〃▽〃)","(☆▽☆)","(*^ω^*)","(≧◡≦)","(🌸◠‿◠)","(𓆩♡𓆪)","(✿ ♡‿♡)","(o◕‿◕o)","(っ🎀‿🎀)っ"]
  },
  orchid: {
    desc: "A highly complex, elegant purple orchid flower that populates humid tropical tree canopies. It grows natively as an epiphyte, meaning it anchors its specialized root clusters securely onto mossy bark surfaces to absorb atmospheric moisture rather than feeding directly from dirt ground. It requires careful drainage filtering to prevent over-saturation.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌸","(☯‿☯)","(✧_✧)","(✷‿✷)","(❦‿❦)","(ꏿ﹏ꏿ)","(⚆_⚆)","(•̪●)","( ✿ ▽ ✿ )","(◕‿◕)","(*^.^*)","(〃‿〃)","(•‿•)","(^▽^)","(◕‿◕✿)","(◠‿◠✿)"]
  },
  rose: {
    desc: "A stunning perennial rose stem packed with layers of deeply aromatic ruby petals. Its elegant visual beauty is balanced by rows of sharp, curved protective thorns running down its wood-like stalk to deter hungry herbivores. It is a slow-blooming plant that requires rich organic soil mix and seasonal pruning to flourish beautifully.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🌹","(❤‿❤)","(｡♥‿♥｡)","(♡ω♡*)","(✿ ♡‿♡)","(′▽`〃)♡","(づ￣ ³￣)づ","(♥ω♥*)","(๑˘ᵕ˘)","(ღ˘⌣˘ღ)","(◌^▽^◌)","(✿❦‿❦)","(•‾⌣‾•)","(っ˘з(〃^∇^)","(๑♡⌓♡๑)","(灬º‿º灬)"]
  },
  tulip: {
    desc: "A smooth bulb-grown spring tulip displaying neat, symmetrical pastel flower bells. It signals the cyclical end of long winter frost by quickly shooting bright lime-green blades up through chilly, damp meadows. This delicate looking flower prefers cool morning mist and thrives inside loose, sandy soil mixes.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🌷","(˘ᵕ˘)✿","(ˊᵕˋ)","(𓂂ᵕ𓂂)","(｡•ㅅ•｡)","(๑•᎑•๑)","( ˙▿˙ )","( ˶ˆ꒳ˆ˵ )","( ˊᵕˋ )♡","(„• ֊ •„)","(。U ω U。)","(๑ᵔ⤙ᵔ๑)","(* ´ ` *)","(ˆ▿ˆc)","(🐄)","(⌒‿⌒)"]
  },
  bamboo: {
    desc: "An incredible woody grass structure built with hollow, segmented reed columns that can rocket skyward at extreme speeds. Its expansive underground rhizome root system weaves a dense network beneath the floor, anchoring entire riverbeds against sliding mud. It stands as a timeless historical symbol of flexibility, strength, and continuous upward progress.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🎍","(•ᴥ•)","🐼","(꜆˶ᵔᵕᵔ˶)꜆","(•⚇•)","(◕ܫ◕)","(✧ܫ✧)","(ᵔᴥᵔ)","(•̀⤙•́)🐼","(=^･ω･^=)","(='ᆽ'=)","🐾","(^._.^)","(𓃠)","(ᵔ-ᵔ)","(•-•)"]
  }
};
// ================= EXTENDED ECOSYSTEM DATA LOGS: PART 2 =================
Object.assign(plantData, {
  bonsai: {
    desc: "An ancient decorative miniature tree art piece cultivated meticulously over decades of patient container pruning. By carefully styling its branches with structural wires and regulating root bounds, the grower replicates the magnificent posture of an old cliffside forest giant inside a shallow desktop dish.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🌳","(─‿─)","(˘_˘)","(◡_◡)","(๑˘ᵕ˘)","( •_•)","(˘◡˘)","(●´ω｀●)","(^‿^)","(💤)","(◍‿◍)","(✯◡✯)","(^ ^)","(•ิ_•ิ)","(ˊᵕˋ)","(𓆏)"]
  },
  mushroom: {
    desc: "A mysterious fungal spore network consisting of deep hidden mycelial threads running through damp floor decay. Its visible umbrella cap springs up overnight in shady spaces to distribute spores across the wind. This plant plays an important role in cleaning up forest waste and turning it back into rich, reusable earth nutrients.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🍄","(🥴)","(🤪)","(✧ω✧)","(★ω★)","(⊙_⊙)","(ʘ‿ʘ)","(ꏿ_ꏿ)","(🤯)","(ʘ╻ʘ)","(⊙👁️⊙)","(-_-)","(◎﹏◎)","(〃￣ω￣〃)","(★﹃ ★)","( 😵‍💫 )"]
  },
  clover: {
    desc: "A creeping patch-forming ground cover weed carrying rare lucky four-leaflet mutations mixed among dense green blankets. Clovers gather nitrogen from open air layers and feed it directly down into surrounding dirt pockets, automatically healing worn soil zones and nourishing neighbor weeds naturally.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🍀","(🤑)","(✧▽✧)","(💰‿💰)","(🌟‿🌟)","(⭐_⭐)","(🎯)","(💎‿💎)","(🎩)","(  ✨ )","(∩^o^)⊃━☆","(っ🔥‿🔥)っ","(✧ω✧)","(☆▽☆)","(o^ ^o)","(💵_💵)"]
  },
  fern: {
    desc: "An old-world non-flowering frond specimen dating back to primitive history systems. It replicates using microscopic spore pockets lined under its lace leaves rather than utilizing modern floral seed methods. It demands full shadow coverage and heavy daily water misting to keep its wild woodland plumes from drying out.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌿","(🦖)","(🦎)","(𓆏)","(𓆗)","(𓆈)","(𓅭)","(𓃰)","(🐸)","(•〰•)","(ᵔᴥᵔ)","(•ᴥ•)","(•‿•)","(•ิ_•ิ)","(◡‿◡)","(＾◡＾)"]
  },
  maple: {
    desc: "A beautiful mountain maple tree leaf cluster showing intricate five-pointed branch designs. As autumn seasons settle over the workspace grid, its internal sap sugar turns its leafy crowns from flat summer forest green into blazing shades of orange and deep purple. It thrives inside open air zones with cold cyclic changes.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🍁","(🍂)","(☕)","(🧣)","(˘ᵕ˘)","( 🍵 )","(｡◕‿◕｡)","(っ˘ڡ˘ς)","( ´ρ`)","(●´ω｀●)","( ′～′)","(◌^▽^◌)","( ´∀`)","( 🍁 ‿ 🍁 )","( ☕ _ ☕ )","(╹◡╹)"]
  },
  palm: {
    desc: "A highly resilient coastal palm tree built with flexible, stringy trunk layers that bend safely during fierce coastal storm winds without cracking. Its long crown fronds allow sea gales to flow cleanly through them, making it a great specimen for warm, sunny sandbox layout configurations.",
    fonts: [{key:"f1",name:"Double"},{key:"f3",name:"Script"}],
    kaomojis: ["🌴","> x <","(-.-)","(🥥)","(🍍)","(🍹)","(𓆉)","(^x^)","(🦈)","(🌊)","☀️","(🌴‿🌴)","(😎)","(🏖️_🏖️)","(𓆝)","(𓆟)"]
  },
  venus: {
    desc: "An incredible carnivorous fly trap mutation equipped with active, sensitive terminal leaf pads. The interior trap walls are loaded with fine hair triggers that snap the green lobes shut within fractions of a second when touched by passing bugs. It relies on digesting these insects to collect nutrients that are missing from its swampy home soil.",
    fonts: [{key:"f2",name:"Gothic"},{key:"f3",name:"Script"}],
    kaomojis: ["🌱","(🐱)","(🐾)","(=^･ω･^=)","(•̀⤙•́)","(•⤙•)","(˵^v^˵)","(ㅇvㅇ)","(▼v▼)","(^‿^)","(ᵔvᵔ)","(•v•)","( 🐱 _ 🐱 )","(^.^)","(✧v✧)","(o^v^o)"]
  },
  berry: {
    desc: "A prickly wild vine crowded with sweet forest berries that grow in bunches along sunny thicket edges. Its tiny summer blossoms turn into bright clusters of fruit over time, providing sugary fuel for woodland creatures. This crawling vine grows best when given a wooden garden trellis to climb.",
    fonts: [{key:"f1",name:"Double"},{key:"f2",name:"Gothic"}],
    kaomojis: ["🍓","(🍇)","(🍒)","(🍰)","(っ˘ڡ˘ς)","(〃^▽^〃)","(๑>◡<๑)","(≧ڡ≦)","(￣▽￣)","(o^ ^o)","(っ﹒︠ᴗ﹒︡)っ","(〃▽〃)","( ˙▿˙ )","( ˶ˆ꒳ˆ˵ )","( 🍓 ‿ 🍓 )","(🍓‿🍓)"]
  }
});
