


type EnumLiteralsOf<T extends Object> = T[keyof T];

export type Gradients = EnumLiteralsOf<typeof Gradients>;

const Gradients = Object.freeze({
    Stripe: 'stripe' as 'stripe',
    Flare: 'flare' as 'flare',
    SublimeLight: 'sublime-light' as 'sublime-light',
    BlurryBeach: 'blurry-beach' as 'blurry-beach',
    BigHead: 'bighead' as 'bighead',
    Vanusa: 'vanusa' as 'vanusa',
    VelvetSun: 'velvet-sun' as 'velvet-sun',
    Argon: 'argon' as 'argon',
    Celestial: 'celestial' as 'celestial',
    Relay: 'relay' as 'relay',
    CrystalClear: 'crystal-clear' as 'crystal-clear',
    FreshTurboscent: 'fresh-turboscent' as 'fresh-turboscent',
    IbizaSunset: 'ibiza-sunset' as 'ibiza-sunset',
    CheerUpEmoKid: 'cheer-up-emo-kid' as 'cheer-up-emo-kid',
    Starfall: 'starfall' as 'starfall',
    Nelson: 'nelson' as 'nelson',
    ForeverLost: 'forever-lost' as 'forever-lost',
    Influenza: 'influenza' as 'influenza',
    JShine: 'jshine' as 'jshine',
    CalmDarya: 'calm-darya' as 'calm-darya',
    Titanium: 'titanium' as 'titanium',
    Pinky: 'pinky' as 'pinky',
    PurpleParadise: 'purple-paradise' as 'purple-paradise',
    Horizon: 'horizon' as 'horizon',
    NoonToDusk: 'noon-to-dusk' as 'noon-to-dusk',
    Default: 'default' as 'default',
}); 

export const gradientsArr = [ "stripe" , "flare" , "sublime-light" , "blurry-beach" , "bighead" , "vanusa" , "velvet-sun" , "argon" , "celestial" , "relay" , "crystal-clear" , "ibiza-sunset" , "fresh-turboscent" , "cheer-up-emo-kid" , "starfall" , "nelson" , "forever-lost" , "influenza" , "jshine" , "calm-darya" , "titanium" , "pinky" , "purple-paradise" , "horizon" , "noon-to-dusk" , "default"]
