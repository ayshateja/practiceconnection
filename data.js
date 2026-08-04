/* ===========================================================
   Practice Connection — content data
   =========================================================== */

const CATEGORIES = {
  "anchor": {
    name: "Anchor",
    tagline: "Ground yourself",
    tile: "#E9FF70",
    bg: "#F9FFE6",
    ink: "#232C18"
  },
  "see-clearly": {
    name: "See Clearly",
    tagline: "Understand what gets in the way of connection.",
    tile: "#70D6FF",
    bg: "#EAF9FF",
    ink: "#12303B"
  },
  "move-toward": {
    name: "Move Toward",
    tagline: "Take the first step",
    tile: "#FF70A6",
    bg: "#FFF0F6",
    ink: "#3B1424"
  },
  "share-yourself": {
    name: "Share Yourself",
    tagline: "Practice letting yourself be seen",
    tile: "#FF9770",
    bg: "#FFF2EC",
    ink: "#3B2013"
  },
  "stay-connected": {
    name: "Stay Connected",
    tagline: "Build relationships that can grow, change and last",
    tile: "#FFD670",
    bg: "#FFF9E8",
    ink: "#332A0E"
  },
  "journal": {
    name: "Journal",
    tagline: "Clarify what you want, notice your patterns, and reflect on your practice.",
    tile: "#008000",
    bg: "#F2FAF3",
    ink: "#FFFFFF"
  }
};

/* Card shape: { title, paragraphs:[...html strings], list:[...]?, quote?, question? } */

const CARDS = {
  "anchor": [
    {
      title: "Start Here",
      paragraphs: [
        "If you're here, you're probably longing for a different kind of connection in your life. You're not alone, and there's nothing wrong with you.",
        "We all develop ways of protecting ourselves that can make connection harder than it needs to be. These cards are small experiments in relating differently.",
        "The fact that you're here means you believe it's possible. <strong>Let's go.</strong>"
      ]
    },
    {
      title: "Seek Aliveness",
      paragraphs: [
        "When loneliness shows up, seek a moment of aliveness&mdash;a conversation with a friend, your favourite music, or the sun on your face.",
        "If that feels out of reach, close your eyes and remember or imagine a time you felt most alive. Stay with that feeling for three slow breaths."
      ]
    },
    {
      title: "Shake It Out",
      paragraphs: [
        "When your mind won't stop or your body won't settle, you don't have to figure it out right now.",
        "Choose one:"
      ],
      list: ["Walk", "Shake out your hands and arms", "Breathe out longer than you breathe in"]
    },
    {
      title: "Let the Fear Come, Too",
      paragraphs: [
        "When fear tells you not to reach out, or it&rsquo;s safer to stay hidden, pause.",
        "Place a hand where you feel the fear in your body. Take one slow breath and quietly say, &ldquo;I know you're here. I'm going to try this anyway.&rdquo;"
      ]
    },
    {
      title: "Absorb the Good Moments",
      paragraphs: [
        "After a moment that leaves you feeling more connected, don't rush past it.",
        "Notice where you feel it in your body. As you exhale, let it spread to your heart, your fingertips, and your toes."
      ]
    },
    {
      title: "Count the Wins",
      paragraphs: [
        "At the end of the day (or week), look back and name one moment when you chose connection over protection.",
        "If you're using the companion journal, this is a great place to record your progress."
      ]
    }
  ],

  "see-clearly": [
    {
      title: "Pain as a Signal",
      paragraphs: [
        "When you feel the pang of loneliness, you don't have to get rid of it. Notice where you feel it in your body and let it be a guide.",
        "Ask: &ldquo;What is this feeling telling me I need?&rdquo;"
      ],
      quote: "There's nothing wrong with you. Just like hunger reminds you to 'eat,' loneliness says 'connect.'",
      question: "What's one small step you can take toward the connection you need right now?"
    },
    {
      title: "Notice What Is Already Here",
      paragraphs: [
        "When you're feeling unseen or alone, pause.",
        "Look for three small signs that someone has reached toward you recently. Let yourself notice each one before moving on."
      ],
      quote: "Sometimes we look for what isn't there instead of noticing what is.",
      question: "What changed when you looked for connection instead of its absence?"
    },
    {
      title: "Meet Yourself Here",
      paragraphs: [
        "Notice when you start beating yourself up after falling into an old pattern. Pause. Speak to yourself the way you would to someone you love."
      ],
      quote: "We all fall back into old patterns. You noticed this time &ndash; that's progress.",
      question: "What changed when you met yourself with kindness?"
    },
    {
      title: "Notice Who Is Talking",
      paragraphs: [
        "Notice when a harsh voice in your head starts telling you what's wrong with you. Pause and quietly say, &ldquo;Oh, hi there, old friend.&rdquo;"
      ],
      quote: "You can hear the voice, but you don't have to believe it.",
      question: "If the voice isn't the whole story, what else might be true?"
    },
    {
      title: "Notice the Urge to Earn",
      paragraphs: [
        "Notice the urge to fix, entertain, accommodate, achieve, or prove yourself. Instead, take one slow breath and see what happens next."
      ],
      quote: "You don't have to <em>do</em> anything to deserve connection.",
      question: "What did you notice after you stepped back from your usual role?"
    },
    {
      title: "Keep It Level",
      paragraphs: [
        "Notice when you're idealizing someone instead of seeing them for who they are. Take one slow breath and imagine what they might struggle with, too."
      ],
      quote: "It's hard to connect with someone you&rsquo;ve placed above you.",
      question: "What changes when you're both allowed to be human &mdash; flaws, mess and all?"
    },
    {
      title: "Make Room for Both",
      paragraphs: [
        "When someone else's good news stings, pause before judging yourself or pulling away. Ask yourself: &ldquo;What does this tell me I long for?&rdquo; Then congratulate them anyway."
      ],
      quote: "You can celebrate them and still want that for yourself.",
      question: "What surprised you about making room for both?"
    }
  ],

  "move-toward": [
    {
      title: "Say Yes",
      paragraphs: [
        "The next time an invitation or opportunity feels slightly uncomfortable but not unsafe, notice your first instinct. Before talking yourself out of it, pause. Consider saying yes."
      ],
      quote: "You already know what &ldquo;no&rdquo; looks like.",
      question: "What happened that wouldn't have happened if you stayed home?"
    },
    {
      title: "Extend an Invite",
      paragraphs: [
        "Invite someone to spend time together. Text: &ldquo;<em>Planning on checking out [thing] next week, want to come?</em>&rdquo;"
      ],
      quote: "Your invitations are a gift, not a burden.",
      question: "What surprised you about being the one to initiate?"
    },
    {
      title: "Flip the Script",
      paragraphs: [
        "When someone says no or doesn't reply, notice the story you default to and where it lives in your body.",
        "Then, consider a kinder explanation that's consistent with who they usually are."
      ],
      quote: "A no or silence isn't always about you. Most people are just juggling life.",
      question: "What changed in your mood and body?"
    },
    {
      title: "Keep the Thread Alive",
      paragraphs: [
        "Send someone a photo, meme, article, or song that made you smile or made you think of them."
      ],
      quote: "Relationships are built through consistent small moments.",
      question: "What was it like to keep the thread alive?"
    },
    {
      title: "Reach Despite the Silence",
      paragraphs: [
        "When it's been longer than you meant to reach out, notice the urge to stay silent because it feels awkward now.",
        "Take one slow breath. Send the message anyway."
      ],
      quote: "Sometimes one small message is all it takes to begin again.",
      question: "What surprised you after you reached out?"
    },
    {
      title: "Go Play",
      paragraphs: [
        "Instead of another catch-up, invite someone to do something fun together."
      ],
      quote: "Fun counts, too.",
      question: "What did play make possible between you?"
    }
  ],

  "share-yourself": [
    {
      title: "Say the Thing",
      paragraphs: [
        "Share one thing you've been keeping to yourself. Remember: You decide what, when, and with whom you share.",
        "If it helps, feel both feet on the ground and start with, &ldquo;<em>I'm nervous to tell you this&hellip;</em>&rdquo;"
      ],
      quote: "It makes sense that sharing feels scary. It's also how people get to know you better.",
      question: "What happened and how did their response compare to your fear?"
    },
    {
      title: "Ask Out Loud",
      paragraphs: [
        "Think of one specific thing that would make this week a little easier. Ask someone if they'd be willing to help."
      ],
      quote: "It's okay if this feels vulnerable. Letting someone help is one way of being together.",
      question: "What surprised you about asking?"
    },
    {
      title: "Honour Your Limits",
      paragraphs: [
        "When you notice yourself wanting to say yes out of fear, guilt, a wish to be agreeable, or a need to keep the peace, pause. If you need to, say, &ldquo;<em>Can I think about it and get back to you?</em>&rdquo;"
      ],
      quote: "Staying connected shouldn't require leaving yourself behind.",
      question: "How did it feel to include yourself in the decision?"
    },
    {
      title: "Let Them Surprise You",
      paragraphs: [
        "Tell someone what you&rsquo;re afraid of before you've decided how they'll react."
      ],
      quote: "You don't know how they'll respond until you give them a chance.",
      question: "What became possible when you left room to be surprised?"
    },
    {
      title: "Break the Silence",
      paragraphs: [
        "Notice the part of you you've learned to keep hidden because it didn't feel safe to be seen. Place a hand where you feel it in your body. Stay there for three slow breaths.",
        "When you're ready, consider letting someone who can meet you with care see this part of you."
      ],
      quote: "Some things feel lighter when someone knows.",
      question: "What was it like to let someone see this part of you?"
    },
    {
      title: "Don't Take It Back",
      paragraphs: [
        "Resist the urge to pull back, re-explain yourself, or apologize after you shared a part of yourself with someone. Take three slow breaths."
      ],
      quote: "You were brave enough to share. Now, give them a chance to meet you there.",
      question: "Once you settled, how did you feel about what you shared?"
    },
    {
      title: "Return to Yourself",
      paragraphs: [
        "When closeness starts to feel overwhelming and you suddenly want to pull away, do something that helps you come back to yourself like a walk, a night's sleep, or talking to someone you trust."
      ],
      quote: "The urge to leave isn't always the same as wanting to leave.",
      question: "When you feel more like yourself, what do you want?"
    }
  ],

  "stay-connected": [
    {
      title: "Match Their Energy",
      paragraphs: [
        "When someone lights up talking about something they care about, join their excitement. Say, &ldquo;<em>You seem really excited about that. Tell me more.</em>&rdquo;"
      ],
      quote: "You don't have to share their interest to share their joy.",
      question: "What did you notice when you joined their excitement?"
    },
    {
      title: "Stay With Them",
      paragraphs: [
        "When someone shares something difficult, resist the urge to fix or advise. Offer your presence before your solutions. Say, &ldquo;<em>I'm here with you</em>&rdquo; or &ldquo;<em>That sounds hard.</em>&rdquo; Then pause. Let them decide what comes next."
      ],
      quote: "You don't have to solve anything to be helpful. Your presence is enough.",
      question: "What happened when you stayed instead of trying to solve?"
    },
    {
      title: "Take a Beat",
      paragraphs: [
        "When you feel irritation, defensiveness, or heat in your chest, pause. Take one breath before you speak."
      ],
      quote: "You can't always choose what you feel. You can choose what you do next.",
      question: "What did one breath make possible?"
    },
    {
      title: "Hold Two Views",
      paragraphs: [
        "When you and someone else see things differently, pause.",
        "Ask yourself: What feels true for me? What might also be true for them?"
      ],
      quote: "More than one truth can exist at the same time.",
      question: "How did holding both change the conversation or your understanding of it?"
    },
    {
      title: "Make It Right",
      paragraphs: [
        "When you realize you've hurt someone, it's tempting to avoid, minimize, or hope it blows over.",
        "Reach out before the silence grows."
      ],
      quote: "The words don't have to be perfect.",
      question: "What happened, in you and between you, when you reached out instead of letting the tension sit?"
    },
    {
      title: "Hear Their Truth",
      paragraphs: [
        "Resist the urge to defend yourself or collapse into a spiral of self-blame when someone shares that you've hurt them or experienced you differently than you intended.",
        "Sit down if you can and feel the chair supporting you. Take one slow breath and say: &ldquo;<em>Thank you for telling me. I want to understand. Can you help me see what this was like for you?</em>&rdquo;"
      ],
      quote: "We can care for each other and still get things wrong.",
      question: "What became possible when you stayed open long enough to hear what mattered to them?"
    },
    {
      title: "Lighten the Load",
      paragraphs: [
        "Notice one person who still takes up more space in your mind than you'd like.",
        "Ask yourself: Is there one small part of this I&rsquo;m ready to put down, if any?"
      ],
      quote: "You don't have to carry all of it forever.",
      question: "What became lighter, if anything?"
    },
    {
      title: "Adjust the Rhythm",
      paragraphs: [
        "When a relationship isn't what it used to be, notice where you feel that loss in your body. Stay with the feeling.",
        "Then ask: What kind of relationship is possible now?"
      ],
      quote: "It's okay to miss what you had. Relationships can change shape without losing their meaning.",
      question: "What rhythm, if any, feels possible in this moment?"
    },
    {
      title: "Make Room",
      paragraphs: [
        "When the absence of the relationships you long for feels especially heavy, pause.",
        "Notice where you feel it in your body. Stay there for three breaths.",
        "When you're ready, see if you can put words to what you're feeling or longing for without trying to change it."
      ],
      quote: "Sometimes there is nothing to do but be here."
    },
    {
      title: "Let Them Know",
      paragraphs: [
        "Choose one person you care about. Tell them one thing you appreciate about them or the difference they've made in your life."
      ],
      quote: "Don't assume they already know. Hearing it matters.",
      question: "What was it like to let them know?"
    }
  ]
};

/* ===========================================================
   Journal content
   =========================================================== */

const NOTICE_QUESTIONS = [
  "What happened?",
  "How did I feel?",
  "What did I notice in my body?",
  "What was my mind saying?",
  "What action did I take, or want to take?",
  "Have I seen this reaction before?"
];

const NOTICE_EXAMPLES = [
  {
    label: "Example 1",
    text: "I texted a friend to hang out. It's been a day, and I haven't heard back. I notice I keep checking my phone and wondering if I did something to upset her the last time we hung out. I really want to send another text, but I don't. Instead, I eat a bag of chips and decide not to reach out to her again for a while. Looking back, I notice I often assume silence means I've done something wrong and pull away before I have the chance to find out."
  },
  {
    label: "Example 2",
    text: "I shared something I've been struggling with with a friend. Afterwards, I felt flooded and overwhelmed. My mind kept wondering if I'd shared too much and what they must think of me. When I got home, I went straight to bed even though it was the afternoon. For the next little while, I found myself avoiding that friend because I felt embarrassed. Looking back, I notice this tends to happen after I've been vulnerable."
  }
];

const PRACTICE_QUESTIONS = [
  "What practice(s) did I try this week?",
  "What did I notice?",
  "What did I learn?",
  "What do I want to remember and bring forward with me?",
  "What do I want to try next? (it can be the same practice)"
];

const LONGING_EXAMPLES = [
  "More depth in a few close relationships",
  "More casual, everyday moments with neighbours or colleagues",
  "New friendships with shared purpose or play",
  "A sense of belonging to a group, tradition, or place",
  "Connection to myself, my body, or something bigger"
];

const VISUALIZATION_PROMPTS = [
  "Who is in your life (and who isn&rsquo;t)?",
  "What are your roles and relationships with them?",
  "How often and how long do you typically see each other, and in what ways (in-person, text, online, special occasion etc.)?",
  "How do they support you emotionally or practically?",
  "How do you feel during and after spending time with them?"
];

const FEELINGS_WORDS = ["Accepted","Appreciated","Burdensome","Curious","Guarded","Invisible","Longing","Misunderstood","Overwhelmed","Rejected","Relaxed","Resentful","Safe","Seen","Self-conscious","Supported","Uncertain"];

const BODY_WORDS = ["Blank mind","Clenched jaw","Feeling frozen","Heavy tongue","Holding my breath","Knots or butterflies in my stomach","Numbness","Racing heart","Racing mind","Relaxed shoulders","Steady breath","Sweaty palms","Tight chest"];

/* Journal pages, in reading order */
const JOURNAL_PAGES = [
  { id: "welcome", kind: "welcome", title: "Welcome" },
  { id: "visualization", kind: "visualization", title: "Visualization" },
  { id: "longing", kind: "longing", title: "What You're Longing For" },
  { id: "notice-1", kind: "notice", title: "Notice", index: 1, showExamples: true },
  { id: "notice-2", kind: "notice", title: "Notice", index: 2 },
  { id: "notice-3", kind: "notice", title: "Notice", index: 3 },
  { id: "notice-4", kind: "notice", title: "Notice", index: 4 },
  { id: "notice-5", kind: "notice", title: "Notice", index: 5 },
  { id: "reflect", kind: "reflect", title: "What Are You Beginning to Notice?" },
  { id: "practice-1", kind: "practice", title: "Practice", index: 1 },
  { id: "practice-2", kind: "practice", title: "Practice", index: 2 },
  { id: "practice-3", kind: "practice", title: "Practice", index: 3 },
  { id: "practice-4", kind: "practice", title: "Practice", index: 4 },
  { id: "practice-5", kind: "practice", title: "Practice", index: 5 },
  { id: "practice-6", kind: "practice", title: "Practice", index: 6 },
  { id: "practice-7", kind: "practice", title: "Practice", index: 7 },
  { id: "practice-8", kind: "practice", title: "Practice", index: 8 },
  { id: "celebrate", kind: "celebrate", title: "Celebrate!" },
  { id: "words", kind: "words", title: "Words to Describe Your Experience" }
];
