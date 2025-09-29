export interface EntityData {
  canonical_entities: {
    people: Record<string, {
      canonical_name: string;
      aliases: string[];
      description: string;
    }>;
    companies: Record<string, {
      canonical_name: string;
      aliases: string[];
      description: string;
    }>;
  };
  excerpts: Array<{
    id: string;
    speaker: string;
    quote_text: string;
    source: {
      type: string;
      url: string;
      date: string;
      timestamp: string;
    };
    context: string;
    mentioned_entities: string[];
    tags: string[];
  }>;
  relationships: Array<{
    id: string;
    type: string;
    subject: string;
    object: string;
    temporal?: string;
    duration?: string;
    role?: string;
    evidence_excerpts: string[];
  }>;
}

export const ENTITY_DATA: EntityData = {
  canonical_entities: {
    people: {
      tyler_denk: {
        canonical_name: "Tyler Denk",
        aliases: ["Tyler", "@TylerDenk", "@denk_tweets"],
        description: "Co-founder and CEO of Beehiiv, former Morning Brew employee"
      },
      austin_rief: {
        canonical_name: "Austin Rief",
        aliases: ["Austin"],
        description: "Co-founder and CEO of Morning Brew, advisor and investor in Beehiiv"
      },
      alex_lieberman: {
        canonical_name: "Alex Lieberman",
        aliases: ["Alex"],
        description: "Co-founder of Morning Brew"
      },
      ben_hargett: {
        canonical_name: "Ben Hargett",
        aliases: ["Ben"],
        description: "Co-founder of Beehiiv, former Morning Brew engineer"
      },
      jake_hurd: {
        canonical_name: "Jake Hurd",
        aliases: ["Jake"],
        description: "Co-founder of Beehiiv, former Morning Brew engineer"
      },
      andrew_platkin: {
        canonical_name: "Andrew Platkin",
        aliases: ["Andrew"],
        description: "Former CTO of Beehiiv, Tyler's mentor at Morning Brew, passed away May 2022"
      },
      reid_hoffman: {
        canonical_name: "Reid Hoffman",
        aliases: ["Reid"],
        description: "LinkedIn founder, quoted by Tyler about shipping products"
      },
      brian_chesky: {
        canonical_name: "Brian Chesky",
        aliases: ["Brian"],
        description: "Airbnb CEO, Tyler's role model for company building"
      },
      elon_musk: {
        canonical_name: "Elon Musk",
        aliases: ["Elon"],
        description: "Tesla/SpaceX CEO, admired by Tyler for innovation"
      },
      daniel_berk: {
        canonical_name: "Daniel Berk",
        aliases: ["Daniel"],
        description: "Senior Manager at Beehiiv"
      },
      tony_varghese: {
        canonical_name: "Tony Varghese",
        aliases: ["Tony"],
        description: "Senior Marketing Manager at Beehiiv"
      },
      edward_white: {
        canonical_name: "Edward White",
        aliases: ["Edward"],
        description: "Head of Growth at Beehiiv"
      },
      guillermo_rauch: {
        canonical_name: "Guillermo Rauch",
        aliases: ["Guillermo"],
        description: "Vercel CEO/founder, praised Beehiiv's PWA implementation"
      }
    },
    companies: {
      beehiiv: {
        canonical_name: "Beehiiv",
        aliases: ["beehiiv"],
        description: "Newsletter platform company founded by Tyler Denk, Ben Hargett, and Jake Hurd"
      },
      morning_brew: {
        canonical_name: "Morning Brew",
        aliases: ["MB"],
        description: "Newsletter business media company founded by Austin Rief and Alex Lieberman"
      },
      google: {
        canonical_name: "Google",
        aliases: ["YouTube Music", "Google YouTube Music"],
        description: "Tech company where Tyler worked for 10 months after leaving Morning Brew"
      },
      substack: {
        canonical_name: "Substack",
        aliases: [],
        description: "Newsletter platform competitor to Beehiiv"
      },
      mailchimp: {
        canonical_name: "Mailchimp",
        aliases: [],
        description: "Email service provider acquired for $12B, competitor reference point"
      },
      social_leverage: {
        canonical_name: "Social Leverage",
        aliases: [],
        description: "Lead investor in Beehiiv's seed round, multiple funding rounds"
      },
      nea: {
        canonical_name: "New Enterprise Associates",
        aliases: ["NEA"],
        description: "Series B lead investor, $33M funding round in Beehiiv"
      },
      blue_wire_capital: {
        canonical_name: "Blue Wire Capital",
        aliases: [],
        description: "Seed extension investor in Beehiiv"
      },
      theskimm: {
        canonical_name: "theSkimm",
        aliases: ["Skimm"],
        description: "Newsletter pioneer with Skimm'bassadors referral program, inspiration for Morning Brew"
      },
      airbnb: {
        canonical_name: "Airbnb",
        aliases: [],
        description: "Brian Chesky's company, Tyler's role model for company building"
      },
      vercel: {
        canonical_name: "Vercel",
        aliases: [],
        description: "Guillermo Rauch's company, praised Beehiiv's PWA implementation"
      },
      shopify: {
        canonical_name: "Shopify",
        aliases: [],
        description: "E-commerce platform Tyler specialized in, crucial for Morning Brew merch"
      },
      business_insider: {
        canonical_name: "Business Insider",
        aliases: [],
        description: "Media company that acquired Morning Brew"
      },
      convertkit: {
        canonical_name: "ConvertKit",
        aliases: [],
        description: "Email marketing platform competitor to Beehiiv"
      },
      barstool_sports: {
        canonical_name: "Barstool Sports",
        aliases: ["Barstool"],
        description: "Media company referenced for merchandising success (40% revenue from merch)"
      }
    }
  },
  excerpts: [
    {
      id: "tyler_denk_001",
      speaker: "tyler_denk",
      quote_text: "I graduated with a bunch of student debt and my company didn't take off. So, I was living in my parents' basement with literally $2.50 in my bank account. I had put all my eggs in one basket, thinking that this company was going to be a multi-billion dollar success, because you have to be delusional as a founder. I was left with nothing. You can see more about this at https://youtu.be/k2ezi6HM5XQ",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=262",
        date: "Sep 5, 2024",
        timestamp: "4:22"
      },
      context: "Describing his situation after college graduation and failed startup",
      mentioned_entities: ["tyler_denk"],
      tags: ["personal_story", "founding_journey", "financial_struggles"]
    },
    {
      id: "tyler_denk_002",
      speaker: "tyler_denk",
      quote_text: "I became very fascinated with Shopify. I thought it was such a powerful platform. I ended up doing a lot of freelance work building Shopify sites",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=217",
        date: "Jul 30, 2023",
        timestamp: "3:37"
      },
      context: "Explaining how he got into freelance development work",
      mentioned_entities: ["tyler_denk", "shopify"],
      tags: ["early_career", "freelance_work", "platform_fascination"]
    },
    {
      id: "tyler_denk_003",
      speaker: "tyler_denk",
      quote_text: "My good buddy Austin Rief who is also from Baltimore called me",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=234",
        date: "Jul 30, 2023",
        timestamp: "3:54"
      },
      context: "How the Morning Brew opportunity started",
      mentioned_entities: ["tyler_denk", "austin_rief"],
      tags: ["morning_brew_founding", "relationships", "geography"]
    },
    {
      id: "tyler_denk_004",
      speaker: "tyler_denk",
      quote_text: "I was on an hour-long car ride home from DC and Austin was venting [on the call] about the business and the opportunity. This was when Morning Brew probably had 30,000-40,000 subscribers. He was debating raising money and going full time or taking a big investment banking job in New York. One thing he said was, 'Did you know Barstool is making 40% of their revenue through merch?' or whatever the number was. He was interested in merch, and I said, 'Dude, I got you.' Shopify was my thing. I said, 'Let me help you build,' because they had some brand affinity with the mug and the logo, and people wanted t-shirts, hats, or coffee mugs. So the first idea was, 'I'll help you build a Shopify store'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=126",
        date: "Sep 12, 2023",
        timestamp: "2:06"
      },
      context: "The pivotal phone call with Austin that led to Tyler joining Morning Brew",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew", "barstool_sports", "shopify"],
      tags: ["morning_brew_founding", "business_opportunity", "merchandise", "subscriber_count"]
    },
    {
      id: "tyler_denk_005",
      speaker: "tyler_denk",
      quote_text: "We started talking, and he said theSkimm is growing so quickly. They were trailblazers in the newsletter space, with millions of subscribers. They had the Skimm'bassadors program, a referral program that worked really well. All these girls in New York who read it loved their ambassador program and were always sharing it. He said, 'We should imitate that'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=170",
        date: "Sep 12, 2023",
        timestamp: "2:50"
      },
      context: "Austin explaining the referral program inspiration from theSkimm",
      mentioned_entities: ["tyler_denk", "austin_rief", "theskimm"],
      tags: ["referral_programs", "newsletter_inspiration", "growth_strategies"]
    },
    {
      id: "tyler_denk_006",
      speaker: "tyler_denk",
      quote_text: "I straight-faced told him, 'Yeah, absolutely, no problem.' Even though I had no idea how to do it. I had $2.50 in my bank account and he offered me $3,000 to do it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=351",
        date: "Sep 5, 2024",
        timestamp: "5:51"
      },
      context: "Taking on the referral program contract despite not knowing how to build it",
      mentioned_entities: ["tyler_denk", "austin_rief"],
      tags: ["confidence", "financial_need", "contract_work", "fake_it_til_you_make_it"]
    },
    {
      id: "tyler_denk_007",
      speaker: "tyler_denk",
      quote_text: "For 3 weeks, I was building this referral program, making it up as I went. I had no idea what I was doing and almost quit 5 separate times. At 2 a.m., I'd be up thinking, 'I lied about being able to do this, and I have no idea how to get past this point.' I almost texted him to give up but didn't. I finished it and he paid me $3,000",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=210",
        date: "Sep 12, 2023",
        timestamp: "3:30"
      },
      context: "The struggle of building the first referral program for Morning Brew",
      mentioned_entities: ["tyler_denk", "austin_rief"],
      tags: ["struggle", "perseverance", "learning_on_the_job", "imposter_syndrome"]
    },
    {
      id: "tyler_denk_008",
      speaker: "tyler_denk",
      quote_text: "I had $120,000 of student debt from paying for school myself. So the safe move was to go to DC, live with my friend, and work at Deloitte as a consultant. I had signed the offer and was set to start in two weeks when Austin reached out and said, 'What do you think about joining Morning Brew full-time and coming up to New York?'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=250",
        date: "Sep 12, 2023",
        timestamp: "4:10"
      },
      context: "The decision between safe consulting job and risky startup opportunity",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew"],
      tags: ["career_decision", "student_debt", "risk_vs_safety", "consulting"]
    },
    {
      id: "tyler_denk_009",
      speaker: "tyler_denk",
      quote_text: "In retrospect, it seems like a no-brainer. Morning Brew went on to be very successful. But when I joined, they had 50,000 subscribers, two co-founders and a writer in a NYU dorm-room-office thing. I had so much debt and it was such a risk. One of my friends, who I asked for career advice, said, 'You're going to be 1 of 50,000 people in that job at Deloitte doing the same thing or the only person in the world building Morning Brew and doing that.' I completely bet on myself, dropped my girlfriend, left life in DC, and moved to New York within 2 months. That's how I got into Morning Brew",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=269",
        date: "Sep 12, 2023",
        timestamp: "4:29"
      },
      context: "Making the decision to join Morning Brew as second employee",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["career_pivotal_moment", "betting_on_yourself", "unique_opportunity", "personal_sacrifice"]
    },
    {
      id: "tyler_denk_010",
      speaker: "tyler_denk",
      quote_text: "As a small startup, they gave me full control of the inbox and everything that was going on. Every time we pressed send, we would get 500 replies of people being like, 'I absolutely love this newsletter, I can't start my day without reading it.' That reader feedback gave me the buy-in that there's something here. You can sell education, you can do advertising, you can do events. There's so much opportunity if you have the attention of these people.",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=483",
        date: "Sep 5, 2024",
        timestamp: "8:03"
      },
      context: "Early responsibility at Morning Brew and recognizing the newsletter opportunity",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["early_responsibility", "reader_engagement", "business_opportunity", "attention_economy"]
    },
    {
      id: "tyler_denk_011",
      speaker: "tyler_denk",
      quote_text: "I got a few percent equity",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=314",
        date: "Sep 12, 2023",
        timestamp: "5:14"
      },
      context: "His equity stake at Morning Brew",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["equity", "compensation", "early_employee"]
    },
    {
      id: "tyler_denk_012",
      speaker: "tyler_denk",
      quote_text: "I owe Austin and Alex so much. One is they didn't have the bandwidth to micromanage me and tell me what to do. So, they gave me all of their trust and faith. Like, 'We trust you, we hired you, just figure out how to grow this newsletter and build this ecosystem.' And so, I was 22, building the core infrastructure of how we're sending emails, how our writers are using the platform, and how our readers are interacting with our content. I don't have a boss, I don't have a mentor, it's just a figure-it-out situation, which is amazing",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1173",
        date: "Sep 5, 2024",
        timestamp: "19:33"
      },
      context: "The autonomy and responsibility given to him at Morning Brew",
      mentioned_entities: ["tyler_denk", "austin_rief", "alex_lieberman", "morning_brew"],
      tags: ["autonomy", "trust", "early_responsibility", "infrastructure_building"]
    },
    {
      id: "tyler_denk_013",
      speaker: "tyler_denk",
      quote_text: "The CMS we built in-house. Our writers created the newsletter. We made it custom fit to what Morning Brew is. You can drag and drop the stories around. There's the referral program. Press send in one place, it goes to the website and email. We could've pieced together and paid tens-of-thousands of dollars for off-the-shelf software but I took a risk on myself to build it ourselves and it ended up working great",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=898",
        date: "Sep 5, 2024",
        timestamp: "14:58"
      },
      context: "Building Morning Brew's custom content management system",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["custom_development", "cms", "build_vs_buy", "technical_capabilities"]
    },
    {
      id: "tyler_denk_014",
      speaker: "tyler_denk",
      quote_text: "I actually pitched to white-label what we built at Morning Brew to Alex and Austin and said, 'Why don't we do this? Everyone's asking us for this software. What if you just gave me 3 months, and we made it so anyone could sign up and use the software we built at Morning Brew? Instead of it being for our employees, it could be for anyone,' which is Beehiiv essentially",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4252",
        date: "Jul 20, 2023",
        timestamp: "70:52"
      },
      context: "The original pitch for what became Beehiiv while still at Morning Brew",
      mentioned_entities: ["tyler_denk", "alex_lieberman", "austin_rief", "morning_brew", "beehiiv"],
      tags: ["product_vision", "white_labeling", "beehiiv_origins", "product_pitch"]
    },
    {
      id: "tyler_denk_015",
      speaker: "tyler_denk",
      quote_text: "I didn't know that they were already in acquisition talks. It's hard to be in the late eighth-inning of an acquisition and then be like, 'Oh, we're actually now a SAAS platform.' So I understand why they didn't want to do it. Plus, a lot of media companies have tried to become tech companies and failed. Risk-adjusted, I get it. Morning Brew is working really well as is, so why pivot to being a SAAS company with a 2 person engineering team, led by someone who's self-taught and has never built a SAAS product before?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4271",
        date: "Jul 20, 2023",
        timestamp: "71:11"
      },
      context: "Understanding why Morning Brew rejected the SAAS pivot idea",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["acquisition_timing", "business_strategy", "media_to_tech_pivot", "risk_assessment"]
    },
    {
      id: "tyler_denk_016",
      speaker: "tyler_denk",
      quote_text: "There were 3 of us in a closet-sized office for years, just building this business. But in anything with startups and that type of culture, there's a lot of egos and emotion, and there's a lot going on. There was so much to build, and 3.5 years later, I kind of scratched that itch, and we were optimizing the website, which is a little bit less exciting for me. And of course, I have these broad ambitions and an ego of, 'Hey, I built all this, I want to be paid a lot more, I want more equity,' and Austin is very pragmatic, and he's like, 'No, you're four years out of college, this is what the going rate is.'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1250",
        date: "Sep 5, 2024",
        timestamp: "20:50"
      },
      context: "The tension and dynamics leading to his departure from Morning Brew",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew"],
      tags: ["startup_dynamics", "compensation_disputes", "career_progression", "workplace_tension"]
    },
    {
      id: "tyler_denk_017",
      speaker: "tyler_denk",
      quote_text: "I left maybe not in the most mature terms. I didn't just pick up and leave, but I was like, 'Yo, I got a job at YouTube Music, and I'm out in 2 weeks.' And I was the first person in the core early team to peace out",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1308",
        date: "Sep 5, 2024",
        timestamp: "21:48"
      },
      context: "How he left Morning Brew for Google",
      mentioned_entities: ["tyler_denk", "morning_brew", "google"],
      tags: ["career_transition", "departure_style", "first_to_leave"]
    },
    {
      id: "tyler_denk_018",
      speaker: "tyler_denk",
      quote_text: "I had no idea that they were in talks with Business Insider to get acquired, And, literally, I think the second week on the YouTube Music job, I woke up one morning and got a notification from 20 of my friends: 'Yo, congrats! I can't believe Morning Brew just got bought.' So, I think that also leads to the drama and the emotion tied up. Austin, little did I know, was in hardcore negotiations to make millions and millions of dollars, and now a core person on his team is leaving weeks before",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1327",
        date: "Sep 5, 2024",
        timestamp: "22:07"
      },
      context: "Learning about Morning Brew's acquisition after leaving",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew", "business_insider", "google"],
      tags: ["acquisition_surprise", "timing_irony", "relationship_strain"]
    },
    {
      id: "tyler_denk_019",
      speaker: "tyler_denk",
      quote_text: "Austin and I are boys now. He was our first advisor. He's also an investor. I was texting him yesterday",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=203",
        date: "Sep 5, 2024",
        timestamp: "3:23"
      },
      context: "Current relationship with Austin after founding Beehiiv",
      mentioned_entities: ["tyler_denk", "austin_rief", "beehiiv"],
      tags: ["relationship_repair", "advisor_relationship", "investor"]
    },
    {
      id: "tyler_denk_020",
      speaker: "tyler_denk",
      quote_text: "I'm just sitting in my room in Brooklyn, thinking, 'What am I going to do for a week? Can't really go outside, can't travel.' I was kind of pissed off that I wasn't in San Diego, so I called Ben Hargett (co-founder) and said, 'We've always talked about productizing Morning Brew and building out the tech there. What if we just built that?' We had a few calls, and he brought in Jake Hurd, who he went to school with, he became our third co-founder. We mapped it out, and Ben goes, 'Dude, it's a lot of work. That's pretty damn ambitious to build out a whole email platform that does everything. Morning Brew took us 5 engineers and 3.5 years. Not only do you want to do that, but you also want to make it a platform that anyone can just sign up and start using on their own?' And that was kind of the start of it, at the end of 2020",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4412",
        date: "Jul 20, 2023",
        timestamp: "73:32"
      },
      context: "The genesis of Beehiiv during COVID lockdown",
      mentioned_entities: ["tyler_denk", "ben_hargett", "jake_hurd", "beehiiv", "morning_brew"],
      tags: ["beehiiv_genesis", "covid_impact", "co_founder_recruitment", "platform_vision"]
    },
    {
      id: "tyler_denk_021",
      speaker: "tyler_denk",
      quote_text: "Ten months building at glacial speed because it's nights and weekends for me and my co-founders",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2918",
        date: "Sep 5, 2024",
        timestamp: "48:38"
      },
      context: "Describing the slow development process of Beehiiv while working full-time at Google",
      mentioned_entities: ["tyler_denk", "ben_hargett", "jake_hurd"],
      tags: ["beehiiv_development", "side_project", "timing_constraints"]
    },
    {
      id: "tyler_denk_022",
      speaker: "tyler_denk",
      quote_text: "Beehiiv was a nights and weekends project while they were working at Morning Brew and I was working at Google. Separate computers, separate everything. I was just working late at night. So we did that for about 10 months. Pretty much the whole time I was at Google, I was hustling on this on the weekends",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4459",
        date: "Jul 20, 2023",
        timestamp: "74:19"
      },
      context: "Explaining the development timeline and process for building Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew", "google", "ben_hargett", "jake_hurd"],
      tags: ["beehiiv_development", "side_project", "hustle", "nights_weekends"]
    },
    {
      id: "tyler_denk_023",
      speaker: "tyler_denk",
      quote_text: "The amount of anxiety of building something very slowly against fully-funded full-time teams (competitors) and I'm kind of battling egos with Alex and Austin who were my good friends and former bosses but I'm also taking two of their four engineers to co-found this company with me and there's legal implications. I don't know if I'm waking up with a non-compete or a non-solicit. A lot is going on while also having a full-time job while falling behind in this market while also having this dream vision of 'I think we can do this and pull it off but each day that we're not heads down on this we're getting further and further away from being able to compete.' It was just a ball of ten months of anxiety",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2937",
        date: "Sep 5, 2024",
        timestamp: "48:57"
      },
      context: "Describing the stress and anxiety during the 10-month Beehiiv development period",
      mentioned_entities: ["tyler_denk", "alex_lieberman", "austin_rief", "ben_hargett", "jake_hurd"],
      tags: ["anxiety", "competitive_pressure", "relationship_strain", "legal_concerns"]
    },
    {
      id: "tyler_denk_024",
      speaker: "tyler_denk",
      quote_text: "I did this in the most risky way possible because, at the time, I was still very young in my career and had a ton of debt. I couldn't just not make money and live in New York or LA while building a company. Plus, our company required software vendors with annual contracts of $80,000. So, we raised money in August 2021, and the second the money hit the bank account, I put in my two weeks' notice at Google. I started full-time at Beehiiv in early August 2021. It was me, Ben, and Jake as co-founders (who joined full-time a few weeks after Tyler) and we brought on Andrew Platkin as our initial CTO. So, it was us 4, just grinding and building. Then, we launched in November of 2021",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4517",
        date: "Jul 20, 2023",
        timestamp: "75:17"
      },
      context: "Explaining the risky transition from Google to Beehiiv full-time",
      mentioned_entities: ["tyler_denk", "google", "beehiiv", "ben_hargett", "jake_hurd", "andrew_platkin"],
      tags: ["career_risk", "funding", "team_building", "product_launch"]
    },
    {
      id: "tyler_denk_025",
      speaker: "tyler_denk",
      quote_text: "I can't think about the grand vision after 8:00 p.m. because then I don't sleep. We have a really talented team, and we have a pretty well-defined roadmap for at least the next 12 to 24 months. I get really excited about what we're in the process of building",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5836",
        date: "Jul 20, 2023",
        timestamp: "97:16"
      },
      context: "Discussing how he manages work-life balance and vision planning",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["work_life_balance", "product_roadmap", "team_quality", "sleep_habits"]
    },
    {
      id: "tyler_denk_026",
      speaker: "tyler_denk",
      quote_text: "If there's a writer who's going to spend 3 hours writing stories for a newsletter, whether you send it to one person or one-million people, that writer's work is the same. It's a fixed cost in terms of time and effort. Our job is to make the other parts easier. The monetization part, so you don't need a sales team; the growth part, so you don't need a growth team; the tech part, so you don't need a tech team. If you're amazing at writing about whatever you care about, the fact that we should be able to abstract away the tech, growth, and monetization at a very high level so you can focus on reaching your audience. That is the Holy Grail value prop of what we're doing for newsletters",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4986",
        date: "Jul 20, 2023",
        timestamp: "83:06"
      },
      context: "Explaining Beehiiv's core value proposition for newsletter creators",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["product_vision", "value_proposition", "content_creators", "platform_abstraction"]
    },
    {
      id: "tyler_denk_027",
      speaker: "tyler_denk",
      quote_text: "Our kicker was, 'We're going to ride the momentum of Morning Brew's success and you're going to have a referral program built into it.' Now it's a bit more commoditized but that was our initial counter-positioning",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2906",
        date: "Sep 5, 2024",
        timestamp: "48:26"
      },
      context: "Describing Beehiiv's initial positioning strategy in the market",
      mentioned_entities: ["tyler_denk", "morning_brew", "beehiiv"],
      tags: ["positioning_strategy", "referral_programs", "market_differentiation"]
    },
    {
      id: "tyler_denk_028",
      speaker: "tyler_denk",
      quote_text: "It was pure demand validation. People were asking for the referral program, the CMS, and the total package of what we had built",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1744",
        date: "Jul 20, 2023",
        timestamp: "29:04"
      },
      context: "Explaining the market validation for Beehiiv's product concept",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["market_validation", "product_demand", "referral_programs", "cms"]
    },
    {
      id: "tyler_denk_029",
      speaker: "tyler_denk",
      quote_text: "We always got a couple hundred replies each day [at Morning Brew]. What software are you using?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1686",
        date: "Jul 20, 2023",
        timestamp: "28:06"
      },
      context: "Describing the frequent inquiries about Morning Brew's tech stack",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["customer_demand", "tech_stack_interest", "market_research"]
    },
    {
      id: "tyler_denk_030",
      speaker: "tyler_denk",
      quote_text: "The inception of Beehiiv happened way back at Morning Brew because we would always get inbound from readers saying, 'Your referral program is amazing, the newsletter's amazing. Can my team or organization use your tech, or how did you build this?' They were all hoping that we had an off-the-shelf solution to say, 'Oh, we just use platform X for the referral program,' or 'This is the CMS we use.' But the truth was, we had a custom-built referral program, a custom-built CMS, and a custom-built ad management system. The website was custom-built too. So there wasn't a simple 'Hey, just use this.' It was like, 'Oh, we built that,' and you can't access it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4219",
        date: "Jul 20, 2023",
        timestamp: "70:19"
      },
      context: "Explaining how customer inquiries at Morning Brew led to the Beehiiv concept",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["beehiiv_origins", "customer_demand", "custom_development", "market_gap"]
    },
    {
      id: "tyler_denk_031",
      speaker: "tyler_denk",
      quote_text: "Being the person who led the development and made a lot of the decisions of how it worked and functioned, when people are like, 'Hey, I want to use this referral program, is there a software you can recommend us off-the-shelf?' The answer was, 'No. We built it in-house.' So it didn't solve their problem. I built that. I know exactly how it works",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1725",
        date: "Jul 20, 2023",
        timestamp: "28:45"
      },
      context: "Explaining his founder-market fit for building Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["founder_market_fit", "technical_expertise", "custom_development"]
    },
    {
      id: "tyler_denk_032",
      speaker: "tyler_denk",
      quote_text: "We know the pain points. We've seen the pain points. I've sat next to teams that were dealing with these pain points, and we're just building tech to help facilitate those and make it easier. So people can create the content they want to create, build a business around it, monetize, grow, and increase their influence. Meanwhile, we handle the annoying, boring stuff that they don't feel like doing, and they get all of the upside",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5588",
        date: "Jul 20, 2023",
        timestamp: "93:08"
      },
      context: "Describing how his Morning Brew experience informed Beehiiv's solution",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["pain_points", "product_development", "customer_value", "content_creators"]
    },
    {
      id: "tyler_denk_033",
      speaker: "tyler_denk",
      quote_text: "The 10,000-foot view of how I'm able to communicate this now is that I went to Google for 10 months, got what I needed out of it, and then applied those learnings to Beehiiv. I knew I was rough around process and product management, and I didn't know what those things really looked like in an organization. I wanted to learn. I learned it as quickly as possible, I was like, 'Okay, that's how that works.' It works really well and scales at a large company with a lot of bureaucracy and process. Now, imagine a 5-6 person startup team. We could hypercharge this and make it so much more efficient. And that's why we've hit the ground running so quickly at Beehiiv",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4130",
        date: "Jul 20, 2023",
        timestamp: "68:50"
      },
      context: "Explaining how Google experience improved his approach to building Beehiiv",
      mentioned_entities: ["tyler_denk", "google", "beehiiv"],
      tags: ["learning", "process_improvement", "google_experience", "startup_efficiency"]
    },
    {
      id: "tyler_denk_034",
      speaker: "tyler_denk",
      quote_text: "What we went to market with as counter-positioning was: 'We have a referral program built into the newsletter.' Substack didn't offer it, all the traditional ESPs don't even think about growth, they just allow you to send emails",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2880",
        date: "Sep 5, 2024",
        timestamp: "48:00"
      },
      context: "Describing Beehiiv's competitive positioning against Substack and traditional email providers",
      mentioned_entities: ["tyler_denk", "beehiiv", "substack"],
      tags: ["competitive_positioning", "referral_programs", "market_differentiation"]
    },
    {
      id: "tyler_denk_035",
      speaker: "tyler_denk",
      quote_text: "And then at the same time, Substack just raised $65m (March 2021) at a $650m valuation. At the time twitter was just a bunch of angry Substack users",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1752",
        date: "Jul 20, 2023",
        timestamp: "29:12"
      },
      context: "Describing the market timing when Beehiiv was being developed",
      mentioned_entities: ["tyler_denk", "substack"],
      tags: ["market_timing", "funding_landscape", "competitor_analysis"]
    },
    {
      id: "tyler_denk_036",
      speaker: "tyler_denk",
      quote_text: "Every vendor we looked at was web first. It was, 'Here's the SEO features and this is how you publish it to your website. And we were like, 'No we don't need to publish it to our website, we need it to look great in Outlook, Gmail and Apple mail.' The product didn't really exist in the market",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=883",
        date: "Sep 5, 2024",
        timestamp: "14:43"
      },
      context: "Explaining the market gap Beehiiv identified regarding email-first vs web-first platforms",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["market_gap", "email_first", "product_positioning"]
    },
    {
      id: "tyler_denk_037",
      speaker: "tyler_denk",
      quote_text: "The analogy I always use is: Mailchimp sold for $12b (September 2021) and they just send emails. I think what we're building is so much more powerful and ambitious. On top of just sending emails, there are network effects, growth, monetization, there's sending emails better and a bunch of other data plays",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5819",
        date: "Jul 20, 2023",
        timestamp: "96:59"
      },
      context: "Comparing Beehiiv's ambitions to Mailchimp's success",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["market_opportunity", "competitive_comparison", "product_ambition"]
    },
    {
      id: "tyler_denk_038",
      speaker: "tyler_denk",
      quote_text: "If Mailchimp can get acquired for $12b, our ambition is much broader than the software that they built so I think this can be a massive multi-billion dollar business",
      source: {
        type: "video_interview",
        url: "https://youtu.be/wQeHYjZNT54?t=1239",
        date: "Jan 7, 2024",
        timestamp: "20:39"
      },
      context: "Discussing Beehiiv's potential market size and valuation prospects",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["valuation_potential", "market_size", "business_ambition"]
    },
    {
      id: "tyler_denk_039",
      speaker: "tyler_denk",
      quote_text: "We want to be a net revenue income for you. You might pay us $99 a month. But through boosts, subscriptions, and the ad network, you're actually making $4,000 or $5,000 from our software. As long as we can keep our users in the black, it's value-additive in their lives. And that's what we're trying to nail as a brand",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5994",
        date: "Jul 20, 2023",
        timestamp: "99:54"
      },
      context: "Explaining Beehiiv's net-revenue model for customers",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["business_model", "customer_value", "revenue_sharing", "net_positive"]
    },
    {
      id: "tyler_denk_040",
      speaker: "tyler_denk",
      quote_text: "There have been decades of email service providers where they're the cost of doing business. You pay mailchimp $700 per month to send emails. Where I think we have a very interesting opportunity is you might pay us $200-$300 per month but we may be paying you $2,000-$3,000 in earnings from our ad network and other features",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2400",
        date: "Sep 5, 2024",
        timestamp: "40:00"
      },
      context: "Contrasting traditional email providers with Beehiiv's revenue-generating model",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["business_model_innovation", "revenue_generation", "cost_vs_profit"]
    },
    {
      id: "tyler_denk_041",
      speaker: "tyler_denk",
      quote_text: "We're now creating new monetizable assets and opportunities that didn't exist before. Email service providers used to be a cost, and now we're a platform that's additive to the entire ecosystem",
      source: {
        type: "video_interview",
        url: "https://youtu.be/SOInHrN_PvA?t=1532",
        date: "Aug 28, 2023",
        timestamp: "25:32"
      },
      context: "Explaining how Beehiiv transforms the email service provider model",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["platform_transformation", "monetization", "ecosystem_value"]
    },
    {
      id: "tyler_denk_042",
      speaker: "tyler_denk",
      quote_text: "I think we can build a multi-billion dollar business",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3834",
        date: "Sep 5, 2024",
        timestamp: "63:54"
      },
      context: "Expressing his vision for Beehiiv's potential",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["business_ambition", "valuation_target", "vision"]
    },
    {
      id: "tyler_denk_043",
      speaker: "tyler_denk",
      quote_text: "Today, Beehiiv is known for the velocity at which we relentlessly ship new features. That part of the company DNA stems almost entirely from Andrew",
      source: {
        type: "newsletter",
        url: "https://mail.bigdeskenergy.com/p/rip-andrew-platkin",
        date: "May 7, 2024",
        timestamp: ""
      },
      context: "Crediting Andrew Platkin for Beehiiv's fast shipping culture",
      mentioned_entities: ["tyler_denk", "beehiiv", "andrew_platkin"],
      tags: ["company_culture", "product_velocity", "andrew_platkin_influence"]
    },
    {
      id: "tyler_denk_044",
      speaker: "tyler_denk",
      quote_text: "There's a sense of urgency that percolates through me. Until we own a lot more of this market share, there is so much more to build",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4913",
        date: "Sep 5, 2024",
        timestamp: "81:53"
      },
      context: "Explaining his drive and urgency in building Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["urgency", "market_share", "competitive_drive"]
    },
    {
      id: "tyler_denk_045",
      speaker: "tyler_denk",
      quote_text: "Perfect kills momentum. Like the Reid Hoffman quote, 'If perfect, you shipped it way too late.' Unless it's touching money or something that is very fragile, we knowingly ship things 80%-85% done. Not blatantly missing something but not entirely polished. Because the last 10% can take so much time to guess how a user would use this. You can actually short circuit all of that by getting it in their hands and they'll tell you right away",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5047",
        date: "Sep 5, 2024",
        timestamp: "84:07"
      },
      context: "Explaining Beehiiv's philosophy of shipping imperfect but functional products",
      mentioned_entities: ["tyler_denk", "reid_hoffman", "beehiiv"],
      tags: ["shipping_philosophy", "speed_vs_perfection", "user_feedback"]
    },
    {
      id: "tyler_denk_046",
      speaker: "tyler_denk",
      quote_text: "There's an acceptance of good enough and getting it in the users hands where a lot of founders are scared of negative criticism",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5095",
        date: "Sep 5, 2024",
        timestamp: "84:55"
      },
      context: "Contrasting Beehiiv's approach with other founders' fear of criticism",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["criticism_acceptance", "founder_mindset", "user_feedback"]
    },
    {
      id: "tyler_denk_047",
      speaker: "tyler_denk",
      quote_text: "I send these project updates. I get 40 people telling me what's wrong with the feature and rather than that hurting my ego, I just synthesize it, put it into a doc and send to to the engineers and they fix it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5101",
        date: "Sep 5, 2024",
        timestamp: "85:01"
      },
      context: "Describing his process for handling user feedback on new features",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["feedback_process", "ego_management", "product_improvement"]
    },
    {
      id: "tyler_denk_048",
      speaker: "tyler_denk",
      quote_text: "When we launched we were the shittiest product in the market because all the competitors had been around for a decade plus and we pieced together something over 10 months",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1611",
        date: "Sep 5, 2024",
        timestamp: "26:51"
      },
      context: "Acknowledging Beehiiv's initial product quality compared to established competitors",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["product_evolution", "competitive_disadvantage", "launch_challenges"]
    },
    {
      id: "tyler_denk_049",
      speaker: "tyler_denk",
      quote_text: "I still feel that hustle. Our competitors are still 5-15 years ahead of us. There's so much to do",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1638",
        date: "Sep 5, 2024",
        timestamp: "27:18"
      },
      context: "Expressing continued urgency despite Beehiiv's success",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["competitive_pressure", "hustle_mentality", "continuous_improvement"]
    },
    {
      id: "tyler_denk_050",
      speaker: "tyler_denk",
      quote_text: "Thinking through where the best employees live is such a distant and archaic way of thinking about how do we get the best person on our team contributing to what we want to do",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3714",
        date: "Sep 5, 2024",
        timestamp: "61:54"
      },
      context: "Defending Beehiiv's remote-first approach to hiring",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["remote_work", "hiring_philosophy", "talent_acquisition"]
    },
    {
      id: "tyler_denk_051",
      speaker: "tyler_denk",
      quote_text: "Then [Austin] said, 'We have so many other projects to build. If you want to keep working with us throughout the summer while you apply for full-time jobs, let's do it.' So I started contracting for them, working 40-60 hours a week, building the website, improving the referral program, and creating different components for the newsletter",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=232",
        date: "Sep 12, 2023",
        timestamp: "3:52"
      },
      context: "Describing the summer contract work that led to his full-time Morning Brew role",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew"],
      tags: ["contract_work", "summer_employment", "referral_programs", "website_development"]
    },
    {
      id: "tyler_denk_052",
      speaker: "tyler_denk",
      quote_text: "That summer, I freelanced for Morning Brew, working 40-60 hours a week building various features. Eventually, Austin asked if I wanted to join them full-time in New York",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=443",
        date: "Sep 5, 2024",
        timestamp: "7:23"
      },
      context: "Summary of his summer freelance work leading to full-time offer",
      mentioned_entities: ["tyler_denk", "morning_brew", "austin_rief"],
      tags: ["freelance_work", "full_time_offer", "feature_development"]
    },
    {
      id: "tyler_denk_053",
      speaker: "tyler_denk",
      quote_text: "I was building for the internal team. The CMS that we built was for the content team. We built an ad management platform for the ad sales team and the copywriting team used to manage the ad inventory. And we built dashboards for the growth team. At the end of the day I was building tech for 40ish internal employees and some consumer facing stuff",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3529",
        date: "Jul 30, 2023",
        timestamp: "58:49"
      },
      context: "Explaining the scope of internal tools he built at Morning Brew",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["internal_tools", "cms", "ad_management", "dashboards", "team_scaling"]
    },
    {
      id: "tyler_denk_054",
      speaker: "tyler_denk",
      quote_text: "Morning Brew was a dream job. I had a ton of responsibilities. Senior leadership team. Figuring things out on the go. Did that for 3.5 years. I joined when we were about 50K-100K subscribers (in 2017) and grew that to 3.5M when I left. I hired a few engineers and a growth person",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3472",
        date: "Jul 30, 2023",
        timestamp: "57:52"
      },
      context: "Reflecting on his comprehensive role and impact at Morning Brew",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["dream_job", "senior_leadership", "subscriber_growth", "team_building"]
    },
    {
      id: "tyler_denk_055",
      speaker: "tyler_denk",
      quote_text: "After 3.5 years that ecosystem was very robust. The writing was on the wall that we were legitimizing into a 50+ person company. Not that I didn't want a boss but I knew that there was going to be an incoming head of product from Vice or Vox, and it was going to get more complicated",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3562",
        date: "Jul 20, 2023",
        timestamp: "59:22"
      },
      context: "Recognizing the organizational changes that would come with Morning Brew's growth",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["company_scaling", "organizational_change", "management_structure"]
    },
    {
      id: "tyler_denk_056",
      speaker: "tyler_denk",
      quote_text: "I love the 3-30 person company, that was exhilarating to me and there was no red tape and I was calling the shots and doing what I wanted. I learned a lot and got what I needed out of that experience but the writing on the wall was that I wasn't going to be on the senior leadership team forever and that they were going to bring in product managers from other media organizations and me personally, maybe being stubborn, I didn't want learn from other product managers",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3582",
        date: "Jul 20, 2023",
        timestamp: "59:42"
      },
      context: "Explaining his preference for smaller companies and resistance to traditional management",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["company_size_preference", "autonomy", "product_management", "stubbornness"]
    },
    {
      id: "tyler_denk_057",
      speaker: "tyler_denk",
      quote_text: "I saw what I could do there and my effectiveness was getting smaller and smaller. The projects were improving the website a little bit which was not as exciting for me. I kinda knew I was ready to try something different",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3707",
        date: "Jul 30, 2023",
        timestamp: "61:47"
      },
      context: "Recognizing diminishing returns and need for new challenges",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["effectiveness_decline", "career_transition", "website_optimization"]
    },
    {
      id: "tyler_denk_058",
      speaker: "tyler_denk",
      quote_text: "I had a week in between Morning Brew and YouTube. I was supposed to go to San Diego and do normal things like relax and travel. I got Covid so I couldn't travel",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4183",
        date: "Jul 20, 2023",
        timestamp: "69:43"
      },
      context: "The unexpected break that led to Beehiiv's creation",
      mentioned_entities: ["tyler_denk", "morning_brew", "google"],
      tags: ["covid_impact", "unexpected_break", "beehiiv_origins"]
    },
    {
      id: "tyler_denk_059",
      speaker: "tyler_denk",
      quote_text: "My roommate at the time was working at Google. He said, 'Hey, there's a job that opened up at YouTube Music'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3721",
        date: "Jul 20, 2023",
        timestamp: "62:01"
      },
      context: "How he learned about the Google job opportunity",
      mentioned_entities: ["tyler_denk", "google"],
      tags: ["job_opportunity", "networking", "google_application"]
    },
    {
      id: "tyler_denk_060",
      speaker: "tyler_denk",
      quote_text: "It was right at the beginning of Covid and I was actually really interested in fintech so I applied at all these big fintech companies [Ramp, Brex, Pipe, etc …] fintech was hot and I love tech and financial stuff",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3736",
        date: "Jul 20, 2023",
        timestamp: "62:16"
      },
      context: "Career exploration during the job search after Morning Brew",
      mentioned_entities: ["tyler_denk"],
      tags: ["fintech_interest", "covid_timing", "job_search", "career_exploration"]
    },
    {
      id: "tyler_denk_061",
      speaker: "tyler_denk",
      quote_text: "In NYC I stumbled into the Ramp co-founder [Eric Glyman, Karim Atiyeh, and Gene Lee] when they were 25 employees. I saw that what I wanted to do next was be an early employee at a somewhat de-risked startup, so I could get a little bit of equity in a company that I thought would definitely become a unicorn. It wasn't so risky that it was like the first 5-10 employees, but they were clearly on a growth trajectory. Those were the kinds of companies I was looking for, but I didn't get any of those jobs",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3772",
        date: "Jul 20, 2023",
        timestamp: "62:52"
      },
      context: "His strategic thinking about startup career opportunities",
      mentioned_entities: ["tyler_denk"],
      tags: ["startup_strategy", "equity_opportunity", "early_employee", "unicorn_potential"]
    },
    {
      id: "tyler_denk_062",
      speaker: "tyler_denk",
      quote_text: "I ended up applying to Google and got a job at YouTube Music in early Covid. I never set foot in the Google office, which is part of the perk of working at a company like Google—the cafeteria, the offices, the space—and being able to stumble from one meeting to another and bump into like 5 of the smartest people you'll ever meet",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3802",
        date: "Jul 20, 2023",
        timestamp: "63:22"
      },
      context: "Missing out on Google's culture due to remote work during COVID",
      mentioned_entities: ["tyler_denk", "google"],
      tags: ["google_experience", "remote_work", "covid_impact", "company_culture"]
    },
    {
      id: "tyler_denk_063",
      speaker: "tyler_denk",
      quote_text: "I was in my tiny apartment, working out of my room, and I knew that I wasn't going to have the big company culture. But it was an opportunity to join one of the largest, most successful tech companies to ever exist. It also gave me the chance to make a realistic assessment of what I knew. But I didn't actually know what it meant to be a product manager in a real company. A real company, meaning one where I'm not making my own rules",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3832",
        date: "Jul 20, 2023",
        timestamp: "63:52"
      },
      context: "Realizing the learning opportunity despite missing Google's physical culture",
      mentioned_entities: ["tyler_denk", "google"],
      tags: ["learning_opportunity", "product_management", "self_assessment", "company_structure"]
    },
    {
      id: "tyler_denk_064",
      speaker: "tyler_denk",
      quote_text: "I had very bureaucratic very slow moving clear pain points that you can't address cuz you don't have the budget or the buy-in or it's too many friction points but it's Google",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3919",
        date: "Jul 20, 2023",
        timestamp: "65:19"
      },
      context: "Experiencing the challenges of working at a large corporation",
      mentioned_entities: ["tyler_denk", "google"],
      tags: ["bureaucracy", "corporate_challenges", "slow_moving", "friction_points"]
    },
    {
      id: "tyler_denk_065",
      speaker: "tyler_denk",
      quote_text: "I was on the YouTube Music team, in the underground side of publishing rights and masters—everything related to who gets paid. It was situations like: music is playing in the background of a video for 20 seconds, the publishing rights are owned by a few people, and there is a person watching in Canada. So the rights there are different than in India, Russia, or the U.S. Who gets those 3 cents? But when you multiply it by millions and millions of views, it becomes significant. That was one really interesting aspect—understanding how the music industry works, which is a totally different set of problems and a totally different pace",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3953",
        date: "Jul 20, 2023",
        timestamp: "65:53"
      },
      context: "Explaining his specific role at YouTube Music and the complexity of music rights",
      mentioned_entities: ["tyler_denk", "google"],
      tags: ["youtube_music", "publishing_rights", "music_industry", "complex_systems"]
    },
    {
      id: "tyler_denk_066",
      speaker: "tyler_denk",
      quote_text: "What I learned there, which is still applicable, is the process. They had a very well-defined approach: if you were going to launch a feature, you'd do a product requirement document—10-20 pages. It includes the user journeys, wireframes, and what happens when the user clicks on something. P0 means this has to be there for launch, P1 is 'this would be nice,' P2 is 'nice to have,' and then there are things you launch knowing they're not perfect, with follow-up tasks for these 10 things. But everything's well-documented",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3998",
        date: "Jul 20, 2023",
        timestamp: "66:38"
      },
      context: "Learning Google's structured product development process",
      mentioned_entities: ["tyler_denk", "google"],
      tags: ["product_process", "documentation", "feature_prioritization", "structured_approach"]
    },
    {
      id: "tyler_denk_067",
      speaker: "tyler_denk",
      quote_text: "I should have done the Google process for my CMS that I built at Morning Brew. You should know every step: what tech you're going to use, how each piece will fit together, and what the end result will be",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4027",
        date: "Jul 20, 2023",
        timestamp: "67:07"
      },
      context: "Reflecting on how Google's process could have improved his Morning Brew work",
      mentioned_entities: ["tyler_denk", "google", "morning_brew"],
      tags: ["process_improvement", "cms_development", "planning", "retrospective_learning"]
    },
    {
      id: "tyler_denk_068",
      speaker: "tyler_denk",
      quote_text: "I never had a process at Morning Brew, and I learned it in Google. You'd think something as buttoned-up in process as Google wouldn't be applicable in a startup, but that's exactly how we launch every feature at Beehiiv: PRD (Product Requirement Document), technical scoping doc, sign-off by everyone, then build",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4092",
        date: "Jul 20, 2023",
        timestamp: "68:12"
      },
      context: "Applying Google's process lessons to Beehiiv",
      mentioned_entities: ["tyler_denk", "morning_brew", "google", "beehiiv"],
      tags: ["process_adoption", "prd", "startup_operations", "systematic_approach"]
    },
    {
      id: "tyler_denk_069",
      speaker: "tyler_denk",
      quote_text: "At the peak of Covid at Google, Sundar introduced a mental health initiative and declared a wellness day – one random free friday to create a 3-day weekend. Everyone thought it was the coolest thing ever, being appreciated for working hard and getting an extra day off. We adopted that at Beehiiv. Every single month, we have the third Friday as a wellness day, guaranteeing a three-day weekend every month",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3482",
        date: "Sep 5, 2024",
        timestamp: "58:02"
      },
      context: "Adopting Google's wellness day concept at Beehiiv",
      mentioned_entities: ["tyler_denk", "google", "beehiiv"],
      tags: ["wellness_day", "mental_health", "employee_benefits", "company_culture"]
    },
    {
      id: "tyler_denk_070",
      speaker: "tyler_denk",
      quote_text: "The value we provide is being able to bring you advertisers that are relatable to your audience",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5525",
        date: "Jul 20, 2023",
        timestamp: "92:05"
      },
      context: "Explaining Beehiiv's ad network value proposition",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["ad_network", "advertiser_matching", "value_proposition"]
    },
    {
      id: "tyler_denk_071",
      speaker: "tyler_denk",
      quote_text: "You have a 20,000 person list because you're amazing at writing about sports, not because you know how to do brand advertising, sales, and monetization. So, how do we allow you to keep writing about sports and allow us to help you monetize?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4835",
        date: "Jul 20, 2023",
        timestamp: "80:35"
      },
      context: "Explaining the core problem Beehiiv solves for newsletter writers",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["creator_focus", "monetization", "specialization", "platform_value"]
    },
    {
      id: "tyler_denk_072",
      speaker: "tyler_denk",
      quote_text: "As a publisher, I'm writing the newsletter that I was going to write anyway. And I'm getting an opportunity from Netflix to pay me a $2-$3 cost per click. I get the brand validation of having Netflix's logo at the top of my newsletter. I did no selling, no testing, no copywriting, no reporting and money was deposited into my account just from accepting the ad. So it really is a win-win situation. And once you start using a ton of first party data, we have machine learning engineers building all of these different models, it becomes extremely performant. And basically tapping into untapped inventory that would've went unsold previously",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2343",
        date: "Sep 5, 2024",
        timestamp: "39:03"
      },
      context: "Describing the seamless ad experience for publishers in Beehiiv's ad network",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["ad_network", "publisher_experience", "brand_validation", "machine_learning"]
    },
    {
      id: "tyler_denk_073",
      speaker: "tyler_denk",
      quote_text: "And on the brand side: if you want to get in front of women in their 30s because that's where you are most likely to get conversions, you can come to us and we know based on our best in class 1st party data. Some newsletter operators don't know what data to collect, how to collect it, or what to ask for. But we can tell brands, 'We have 8,000 newsletters with the majority of the audience is women in their 30s. We can get you in front of them and diversify your spend.'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4859",
        date: "Jul 20, 2023",
        timestamp: "80:59"
      },
      context: "Explaining the advertiser benefits of Beehiiv's ad network",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["advertiser_benefits", "first_party_data", "audience_targeting", "data_advantage"]
    },
    {
      id: "tyler_denk_074",
      speaker: "tyler_denk",
      quote_text: "So it's better for newsletters because they're getting inbound ad opportunities from brands they probably couldn't contact on their own or it's not a core competency. And we can go to brands and say: 'We can target the people that you want across our network of newsletters based on all of our first party data.' And it really is at scale a win-win-win that we're trying to build. That's the Holy Grail",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4886",
        date: "Jul 20, 2023",
        timestamp: "81:26"
      },
      context: "Describing the three-way value creation in Beehiiv's ad network",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["win_win_win", "holy_grail", "network_effects", "value_creation"]
    },
    {
      id: "tyler_denk_075",
      speaker: "tyler_denk",
      quote_text: "What you give up in working with the [ad network] is the narrative of: 'This is exactly who our audience is.' You will get a better rate if you're out in the market negotiating yourself. What you're getting by working with us is that you don't have to do that work",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5474",
        date: "Jul 20, 2023",
        timestamp: "91:14"
      },
      context: "Acknowledging the tradeoffs of using Beehiiv's ad network",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["tradeoffs", "convenience_vs_control", "ad_rates", "work_reduction"]
    },
    {
      id: "tyler_denk_076",
      speaker: "tyler_denk",
      quote_text: "You are writing your newsletter to your 10,000 dental professionals about what is hot in the dental industry, what are different trends, what are different studies and as you're writing you see an inbound opportunity from [Crest] come in and they're paying you $40 CPM and you can press one button, add it to the newsletter and then we'll send you a wire for $3,000 a few weeks later and you don't know anyone at Crest. You didn't do any of the work, no copywriting, you aren't reporting, you aren't doing any tracking. You just press the button",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5493",
        date: "Jul 20, 2023",
        timestamp: "91:33"
      },
      context: "Concrete example of how the ad network works for niche newsletters",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["niche_targeting", "one_button_monetization", "cpm", "ease_of_use"]
    },
    {
      id: "tyler_denk_077",
      speaker: "tyler_denk",
      quote_text: "We only gave you Crest because we know your audience is dental focused. Crest is our customer at this point too. We need to make sure they see a positive ROI. So we're bringing advertisers to newsletters that make sense",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5539",
        date: "Jul 20, 2023",
        timestamp: "92:19"
      },
      context: "Explaining the intelligent matching in the ad network",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["smart_matching", "roi_focus", "advertiser_success", "audience_alignment"]
    },
    {
      id: "tyler_denk_078",
      speaker: "tyler_denk",
      quote_text: "We don't do exclusivity. So if you have a relationship at Crest you can do those deals. It's not like because you're on our platform you can't do other deals",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5561",
        date: "Jul 20, 2023",
        timestamp: "92:41"
      },
      context: "Clarifying Beehiiv's non-exclusive approach to advertising",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["non_exclusive", "publisher_freedom", "relationship_preservation"]
    },
    {
      id: "tyler_denk_079",
      speaker: "tyler_denk",
      quote_text: "We work backwards from we want all of the newsletter to make money, grow and succeed. We're building tools to help facilitate that. If you can find ways to make money and grow faster with other tools or your own relationships, we don't restrict that. We're just trying to be additive",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5574",
        date: "Jul 20, 2023",
        timestamp: "92:54"
      },
      context: "Explaining Beehiiv's philosophy of being additive, not restrictive",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["additive_approach", "publisher_success", "non_restrictive", "growth_facilitation"]
    },
    {
      id: "tyler_denk_080",
      speaker: "tyler_denk",
      quote_text: "It's basically a paid recommendation network",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2454",
        date: "Sep 5, 2024",
        timestamp: "40:54"
      },
      context: "Simple explanation of Beehiiv's Boosts feature",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["boosts", "recommendation_network", "paid_referrals"]
    },
    {
      id: "tyler_denk_081",
      speaker: "tyler_denk",
      quote_text: "You can recommend other newsletters, and they can recommend you. Every time you sign up for a newsletter, you can see the 5 newsletters that they're reading or recommending. That's like a network-effect type play that works really well",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5703",
        date: "Jul 20, 2023",
        timestamp: "95:03"
      },
      context: "Describing the network effects in Beehiiv's recommendation system",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["network_effects", "cross_promotion", "recommendations", "mutual_growth"]
    },
    {
      id: "tyler_denk_082",
      speaker: "tyler_denk",
      quote_text: "For example, you could say, 'I'm spending $5 per lead on Facebook or Instagram to grow my email list. I'm willing to pay $3 to anyone on Beehiiv to help drive me subscribers.' So, you set your CPA at $3 and every newsletter on Beehiiv can see that. They might think, 'I'm growing by 1,000 subscribers a week. If I push 2% or 5% of that to you and get $3 kicked back to me for every subscriber, then it's worth it.' It's just network effects with people who are willing to pay",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5718",
        date: "Jul 20, 2023",
        timestamp: "95:18"
      },
      context: "Detailed example of how Beehiiv's Boosts marketplace works",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["boosts_mechanism", "cpa_model", "subscriber_acquisition", "marketplace"]
    },
    {
      id: "tyler_denk_083",
      speaker: "tyler_denk",
      quote_text: "A lot of our roadmap comes back to experiences we had at Morning Brew. There, we put a ton of money into Facebook, Instagram, Google and Snapchat. Our north star was 'We want to convert new readers to the newsletter that have a high likelihood of opening, reading, and clicking on different content and ads. So we're looking for quality readers who are engaged.' So it makes perfect sense that the most quality readers are probably opening their email and reading other email newsletters",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2458",
        date: "Sep 5, 2024",
        timestamp: "40:58"
      },
      context: "Explaining how Morning Brew's growth experience informed Beehiiv's Boosts feature",
      mentioned_entities: ["tyler_denk", "morning_brew", "beehiiv"],
      tags: ["morning_brew_learnings", "quality_readers", "newsletter_cross_promotion", "engagement_focus"]
    },
    {
      id: "tyler_denk_084",
      speaker: "tyler_denk",
      quote_text: "We have something that is even more aggressive than pop-ups which is email gating your entire posts. If you were to have a really interesting title and people click into it but they can't actually read the content unless they put in their email",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5679",
        date: "Jul 20, 2023",
        timestamp: "94:39"
      },
      context: "Describing Beehiiv's email gating feature for subscriber acquisition",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["email_gating", "subscriber_acquisition", "content_paywall", "aggressive_tactics"]
    },
    {
      id: "tyler_denk_085",
      speaker: "tyler_denk",
      quote_text: "Similar to Substack, we offer a website for our users. They can create content, publish it, and it goes out via email and via web at the same time. We've always had a basic website offering, and we've realized over the past 12 to 18 months that probably the most common feedback that we would receive is more features, functionality, customization",
      source: {
        type: "video_interview",
        url: "https://archive.is/1QLX2",
        date: "Jun 26, 2024",
        timestamp: ""
      },
      context: "Explaining the rationale behind the Typedream acquisition",
      mentioned_entities: ["tyler_denk", "beehiiv", "substack"],
      tags: ["website_builder", "typedream_acquisition", "customer_feedback", "feature_requests"]
    },
    {
      id: "tyler_denk_086",
      speaker: "tyler_denk",
      quote_text: "People always ask: 'How big does my newsletter have to be before I start monetizing?' I toss out 10,000 subscribers sounds like a good round number where it at least interested advertisers say: 'That's enough people that if we can get 2%-5% conversion that would move the needle a bit for us'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5399",
        date: "Jul 20, 2023",
        timestamp: "89:59"
      },
      context: "Providing guidance on when newsletters should start monetizing",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["monetization_threshold", "subscriber_count", "advertiser_interest", "conversion_rates"]
    },
    {
      id: "tyler_denk_087",
      speaker: "tyler_denk",
      quote_text: "It depends on what game you're playing. If you are trying to build long lasting relationships with these advertisers, you want to deliver as much return to the advertiser as possible. As the newsletter operator you want to be able to sell the vision of why they should advertise",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5384",
        date: "Jul 20, 2023",
        timestamp: "89:44"
      },
      context: "Advising on advertiser relationship strategy",
      mentioned_entities: ["tyler_denk"],
      tags: ["advertiser_relationships", "roi_delivery", "relationship_building", "value_selling"]
    },
    {
      id: "tyler_denk_088",
      speaker: "tyler_denk",
      quote_text: "It's all about selling the narrative of why that audience is more valuable than advertising on another channel. If you have a newsletter that speaks to 10,000 decision makers at Series A and Series B startups and you know that for a fact from the surveying you've done. And you know you have a hold and influence on these people, that's very valuable. And the alternative of going to Google or Facebook, like how do you target decision makers who run product organizations at a Series A or Series B company on Facebook. The answer is that you probably don't hit that audience too reliably",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5417",
        date: "Jul 20, 2023",
        timestamp: "90:17"
      },
      context: "Explaining the value proposition of newsletter advertising vs. traditional platforms",
      mentioned_entities: ["tyler_denk"],
      tags: ["audience_value", "targeting_precision", "newsletter_advantage", "facebook_comparison"]
    },
    {
      id: "tyler_denk_089",
      speaker: "tyler_denk",
      quote_text: "CPM is amazing for newsletters because it's straightforward: we have 100,000 people, we charge a $10 CPM, so you're getting $1,000 every time you monetize. That's what we did at Morning Brew, and that's what a lot of newsletters do",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5188",
        date: "Jul 20, 2023",
        timestamp: "86:28"
      },
      context: "Explaining the appeal of CPM pricing for newsletters",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["cpm_model", "straightforward_pricing", "newsletter_monetization", "predictable_revenue"]
    },
    {
      id: "tyler_denk_090",
      speaker: "tyler_denk",
      quote_text: "$20-$50 is a common range CPM. Depending on how niche your target is. If you're very niche, you can get up to $100-$200 CPM. It also varies on whether it's your list size or just the people who are opening. We would always go back and forth at Morning Brew and elsewhere with 'Do you charge based on people who are opening? Or the list size?' Because if they don't open it's not an impression",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5340",
        date: "Jul 20, 2023",
        timestamp: "89:00"
      },
      context: "Providing specific CPM ranges and pricing considerations",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["cpm_ranges", "niche_premium", "impression_calculation", "open_rates"]
    },
    {
      id: "tyler_denk_091",
      speaker: "tyler_denk",
      quote_text: "Brands want CPA because they only pay when someone converts and buys their product. Totally de-risked. Performance based",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5205",
        date: "Jul 20, 2023",
        timestamp: "86:45"
      },
      context: "Explaining why brands prefer CPA pricing",
      mentioned_entities: ["tyler_denk"],
      tags: ["cpa_model", "brand_preferences", "risk_reduction", "performance_based"]
    },
    {
      id: "tyler_denk_092",
      speaker: "tyler_denk",
      quote_text: "Then, CPC is like the happy middle ground. It's like: 'We don't know what's going to convert on your website, you might have a terrible landing page, so we'll just pay you for how many people you drive to our landing page",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5225",
        date: "Jul 20, 2023",
        timestamp: "87:05"
      },
      context: "Explaining CPC as a middle ground pricing model",
      mentioned_entities: ["tyler_denk"],
      tags: ["cpc_model", "middle_ground", "traffic_quality", "landing_page_risk"]
    },
    {
      id: "tyler_denk_093",
      speaker: "tyler_denk",
      quote_text: "The DTC, performance, direct response, they're much more analytical in seeing return on ad spend. So for a newsletter, a much bigger pain in the ass to be able to deliver, because they have a shorter span of 'We need to see results or we're moving to another channel.' That's why a lot of newsletter operators are going niche media. Also why HubSpot bought The Hustle. Because all they need is one conversion and they're good for a foreseeable future in terms of ROI",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5238",
        date: "Jul 20, 2023",
        timestamp: "87:18"
      },
      context: "Explaining challenges of working with performance advertisers",
      mentioned_entities: ["tyler_denk"],
      tags: ["performance_advertisers", "dtc_challenges", "niche_media", "hubspot_acquisition"]
    },
    {
      id: "tyler_denk_094",
      speaker: "tyler_denk",
      quote_text: "The blogger days of going to [cnn.com] or [nyt.com]. There was a time in college when part of my routine, I'd go to [techcrunch.com] and read 5-10 stories. It's what we would call at Morning Brew the push vs. pull. It used to be you have your [ebaumsworld.com] or [techcrunch.com], whatever. You go to these different websites. There's a web destination that you go to. And then you realize everyone in the world is so busy. They have their jobs, their responsibilities, they have other things going on but everyone checks email so rather than me having to remember to go to [techcrunch.com] I could sign up for their email newsletter and in the normal routine of my day I check my inbox and there's the techcrunch newsletter that they're sending me the top stories. It gets pushed to me. It's effortless for me as a consumer.",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=940",
        date: "Sep 5, 2024",
        timestamp: "15:40"
      },
      context: "Explaining the shift from pull to push content consumption",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["push_vs_pull", "content_consumption", "email_convenience", "behavior_shift"]
    },
    {
      id: "tyler_denk_095",
      speaker: "tyler_denk",
      quote_text: "Why it's valuable as a writer or publisher is the exact inverse. You're meeting people exactly where they are which is in their inbox, checking flight receipts or responding to friends and family and whatever else",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1004",
        date: "Sep 5, 2024",
        timestamp: "16:44"
      },
      context: "Explaining the publisher advantage of email newsletters",
      mentioned_entities: ["tyler_denk"],
      tags: ["publisher_advantage", "inbox_presence", "consumer_habits", "direct_access"]
    },
    {
      id: "tyler_denk_096",
      speaker: "tyler_denk",
      quote_text: "Once you get that top-of-funnel, there is the newsletter business which is still primarily ad based but you can also do subscriptions like the Patreon/OnlyFans model. Just charge your readers directly and they have this relationship with you. It also just unlocks that top-of-funnel for whatever else you want to sell them",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1033",
        date: "Sep 5, 2024",
        timestamp: "17:13"
      },
      context: "Describing newsletter monetization opportunities beyond advertising",
      mentioned_entities: ["tyler_denk"],
      tags: ["monetization_models", "subscription_revenue", "reader_relationships", "top_of_funnel"]
    },
    {
      id: "tyler_denk_097",
      speaker: "tyler_denk",
      quote_text: "Facebook sold all these brands and publishers on getting fans or likes on their pages. Because as a business that sold umbrellas, if you get thousands of people that like your page and then you post this new umbrella, maybe it was showing 70% of your fans on their feed. All it took was some product managers realizing they could make more money pushing native posts or community or something else. They changed the algorithm. And now you're getting 7% of your audience (down from 70%). You don't really own the algorithm or the distribution",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1085",
        date: "Sep 5, 2024",
        timestamp: "18:05"
      },
      context: "Criticizing the unreliability of social media algorithm changes",
      mentioned_entities: ["tyler_denk"],
      tags: ["algorithm_changes", "facebook_betrayal", "reach_decline", "platform_risk"]
    },
    {
      id: "tyler_denk_098",
      speaker: "tyler_denk",
      quote_text: "When I press send to 45,000 people on my list, they all more or less get the email directly from me irregardless of what some feed does. With the caveat that there is spam and that does live in the hands of few black box players which is the shitty part of email but if you do the right thing and follow best practices you're usually pretty good there",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1119",
        date: "Sep 5, 2024",
        timestamp: "18:39"
      },
      context: "Explaining the reliability advantage of email over social media",
      mentioned_entities: ["tyler_denk"],
      tags: ["email_reliability", "direct_delivery", "spam_concerns", "best_practices"]
    },
    {
      id: "tyler_denk_099",
      speaker: "tyler_denk",
      quote_text: "We only typically hire full stack engineers",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4925",
        date: "Sep 5, 2024",
        timestamp: "82:05"
      },
      context: "Describing Beehiiv's engineering hiring strategy",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["hiring_strategy", "full_stack_engineers", "team_structure"]
    },
    {
      id: "tyler_denk_100",
      speaker: "tyler_denk",
      quote_text: "Maintaining a high bar of the quality of engineer that you're extending that offer to was also one of the most difficult but biggest cheat codes",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4998",
        date: "Sep 5, 2024",
        timestamp: "83:18"
      },
      context: "Emphasizing the importance of hiring quality in engineering",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["hiring_quality", "engineering_standards", "competitive_advantage", "cheat_codes"]
    },
    {
      id: "tyler_denk_101",
      speaker: "tyler_denk",
      quote_text: "I can't think about the grand vision after 8:00 p.m. because then I don't sleep. We have a really talented team, and we have a pretty well-defined roadmap for at least the next 12 to 24 months. I get really excited about what we're in the process of building",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5836",
        date: "Jul 20, 2023",
        timestamp: "97:16"
      },
      context: "Tyler discussing his approach to long-term planning and how he manages stress about the future",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["leadership", "planning", "work_life_balance", "vision"]
    },
    {
      id: "tyler_denk_102",
      speaker: "tyler_denk",
      quote_text: "If there's a writer who's going to spend 3 hours writing stories for a newsletter, whether you send it to one person or one-million people, that writer's work is the same. It's a fixed cost in terms of time and effort. Our job is to make the other parts easier. The monetization part, so you don't need a sales team; the growth part, so you don't need a growth team; the tech part, so you don't need a tech team. If you're amazing at writing about whatever you care about, the fact that we should be able to abstract away the tech, growth, and monetization at a very high level so you can focus on reaching your audience. That is the Holy Grail value prop of what we're doing for newsletters",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4986",
        date: "Jul 20, 2023",
        timestamp: "83:06"
      },
      context: "Tyler explaining Beehiiv's core value proposition and how they abstract complexity for newsletter creators",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["product_philosophy", "value_proposition", "newsletter_industry", "content_creation"]
    },
    {
      id: "tyler_denk_103",
      speaker: "tyler_denk",
      quote_text: "Our kicker was, 'We're going to ride the momentum of Morning Brew's success and you're going to have a referral program built into it.' Now it's a bit more commoditized but that was our initial counter-positioning",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2906",
        date: "Sep 5, 2024",
        timestamp: "48:26"
      },
      context: "Tyler explaining Beehiiv's initial go-to-market strategy leveraging Morning Brew's reputation",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["go_to_market", "counter_positioning", "referral_program", "competitive_strategy"]
    },
    {
      id: "tyler_denk_104",
      speaker: "tyler_denk",
      quote_text: "It was pure demand validation. People were asking for the referral program, the CMS, and the total package of what we had built",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1744",
        date: "Jul 20, 2023",
        timestamp: "29:04"
      },
      context: "Tyler describing how demand validation from Morning Brew readers led to Beehiiv's creation",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["validation", "product_market_fit", "cms", "referral_program"]
    },
    {
      id: "tyler_denk_105",
      speaker: "tyler_denk",
      quote_text: "The inception of Beehiiv happened way back at Morning Brew because we would always get inbound from readers saying, 'Your referral program is amazing, the newsletter's amazing. Can my team or organization use your tech, or how did you build this?' They were all hoping that we had an off-the-shelf solution to say, 'Oh, we just use platform X for the referral program,' or 'This is the CMS we use.' But the truth was, we had a custom-built referral program, a custom-built CMS, and a custom-built ad management system. The website was custom-built too. So there wasn't a simple 'Hey, just use this.' It was like, 'Oh, we built that,' and you can't access it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4219",
        date: "Jul 20, 2023",
        timestamp: "70:19"
      },
      context: "Tyler explaining the origin story of Beehiiv from reader requests at Morning Brew",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["origin_story", "custom_development", "reader_feedback", "product_inception"]
    },
    {
      id: "tyler_denk_106",
      speaker: "tyler_denk",
      quote_text: "Being the person who led the development and made a lot of the decisions of how it worked and functioned, when people are like, 'Hey, I want to use this referral program, is there a software you can recommend us off-the-shelf?' The answer was, 'No. We built it in-house.' So it didn't solve their problem. I built that. I know exactly how it works",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1725",
        date: "Jul 20, 2023",
        timestamp: "28:45"
      },
      context: "Tyler describing his founder-market fit having personally built the systems people wanted",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["founder_market_fit", "technical_expertise", "in_house_development", "referral_program"]
    },
    {
      id: "tyler_denk_107",
      speaker: "tyler_denk",
      quote_text: "We know the pain points. We've seen the pain points. I've sat next to teams that were dealing with these pain points, and we're just building tech to help facilitate those and make it easier. So people can create the content they want to create, build a business around it, monetize, grow, and increase their influence. Meanwhile, we handle the annoying, boring stuff that they don't feel like doing, and they get all of the upside",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5588",
        date: "Jul 20, 2023",
        timestamp: "93:08"
      },
      context: "Tyler explaining how his 3.5 years at Morning Brew gave him deep understanding of newsletter needs",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["pain_points", "domain_expertise", "content_creation", "monetization"]
    },
    {
      id: "tyler_denk_108",
      speaker: "tyler_denk",
      quote_text: "The 10,000-foot view of how I'm able to communicate this now is that I went to Google for 10 months, got what I needed out of it, and then applied those learnings to Beehiiv. I knew I was rough around process and product management, and I didn't know what those things really looked like in an organization. I wanted to learn. I learned it as quickly as possible, I was like, 'Okay, that's how that works.' It works really well and scales at a large company with a lot of bureaucracy and process. Now, imagine a 5-6 person startup team. We could hypercharge this and make it so much more efficient. And that's why we've hit the ground running so quickly at Beehiiv",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4130",
        date: "Jul 20, 2023",
        timestamp: "68:50"
      },
      context: "Tyler explaining how he strategically used his Google experience to improve Beehiiv's processes",
      mentioned_entities: ["tyler_denk", "google", "beehiiv"],
      tags: ["learning", "process_improvement", "product_management", "scaling", "efficiency"]
    },
    {
      id: "tyler_denk_109",
      speaker: "tyler_denk",
      quote_text: "What we went to market with as counter-positioning was: 'We have a referral program built into the newsletter.' Substack didn't offer it, all the traditional ESPs don't even think about growth, they just allow you to send emails",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2880",
        date: "Sep 5, 2024",
        timestamp: "48:00"
      },
      context: "Tyler describing Beehiiv's differentiation strategy against competitors like Substack",
      mentioned_entities: ["tyler_denk", "beehiiv", "substack"],
      tags: ["competitive_positioning", "differentiation", "referral_program", "email_service_providers"]
    },
    {
      id: "tyler_denk_110",
      speaker: "tyler_denk",
      quote_text: "And then at the same time, Substack just raised $65m (March 2021) at a $650m valuation. At the time twitter was just a bunch of angry Substack users",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1752",
        date: "Jul 20, 2023",
        timestamp: "29:12"
      },
      context: "Tyler describing the market context when Beehiiv launched, with Substack users expressing frustration",
      mentioned_entities: ["tyler_denk", "substack", "twitter"],
      tags: ["market_timing", "competitive_landscape", "user_dissatisfaction", "funding_rounds"]
    },
    {
      id: "tyler_denk_111",
      speaker: "tyler_denk",
      quote_text: "Every vendor we looked at was web first. It was, 'Here's the SEO features and this is how you publish it to your website. And we were like, 'No we don't need to publish it to our website, we need it to look great in Outlook, Gmail and Apple mail.' The product didn't really exist in the market",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=883",
        date: "Sep 5, 2024",
        timestamp: "14:43"
      },
      context: "Tyler explaining the gap in the market that Beehiiv identified - email-first vs web-first platforms",
      mentioned_entities: ["tyler_denk", "beehiiv", "outlook", "gmail", "apple"],
      tags: ["market_gap", "email_first", "product_differentiation", "email_clients"]
    },
    {
      id: "tyler_denk_112",
      speaker: "tyler_denk",
      quote_text: "The analogy I always use is: Mailchimp sold for $12b (September 2021) and they just send emails. I think what we're building is so much more powerful and ambitious. On top of just sending emails, there are network effects, growth, monetization, there's sending emails better and a bunch of other data plays",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5819",
        date: "Jul 20, 2023",
        timestamp: "96:59"
      },
      context: "Tyler comparing Beehiiv's ambitious vision to Mailchimp's simpler model and massive exit",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["market_opportunity", "acquisition_benchmarks", "network_effects", "monetization"]
    },
    {
      id: "tyler_denk_113",
      speaker: "tyler_denk",
      quote_text: "If Mailchimp can get acquired for $12b, our ambition is much broader than the software that they built so I think this can be a massive multi-billion dollar business",
      source: {
        type: "video_interview",
        url: "https://youtu.be/wQeHYjZNT54?t=1239",
        date: "Jan 7, 2024",
        timestamp: "20:39"
      },
      context: "Tyler expressing his long-term vision for Beehiiv's potential valuation",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["vision", "market_size", "valuation_targets", "ambition"]
    },
    {
      id: "tyler_denk_114",
      speaker: "tyler_denk",
      quote_text: "We want to be a net revenue income for you. You might pay us $99 a month. But through boosts, subscriptions, and the ad network, you're actually making $4,000 or $5,000 from our software. As long as we can keep our users in the black, it's value-additive in their lives. And that's what we're trying to nail as a brand",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5994",
        date: "Jul 20, 2023",
        timestamp: "99:54"
      },
      context: "Tyler explaining Beehiiv's revolutionary business model of generating revenue for customers rather than just charging them",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["business_model", "net_revenue", "customer_value", "monetization_features"]
    },
    {
      id: "tyler_denk_115",
      speaker: "tyler_denk",
      quote_text: "There have been decades of email service providers where they're the cost of doing business. You pay mailchimp $700 per month to send emails. Where I think we have a very interesting opportunity is you might pay us $200-$300 per month but we may be paying you $2,000-$3,000 in earnings from our ad network and other features",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2400",
        date: "Sep 5, 2024",
        timestamp: "40:00"
      },
      context: "Tyler contrasting traditional email providers as costs versus Beehiiv as revenue generators",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["business_model_innovation", "cost_vs_revenue", "ad_network", "value_proposition"]
    },
    {
      id: "tyler_denk_116",
      speaker: "tyler_denk",
      quote_text: "We're now creating new monetizable assets and opportunities that didn't exist before. Email service providers used to be a cost, and now we're a platform that's additive to the entire ecosystem",
      source: {
        type: "video_interview",
        url: "https://youtu.be/SOInHrN_PvA?t=1532",
        date: "Aug 28, 2023",
        timestamp: "25:32"
      },
      context: "Tyler describing how Beehiiv transforms the traditional email platform model",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["platform_innovation", "monetizable_assets", "ecosystem_value", "industry_transformation"]
    },
    {
      id: "tyler_denk_117",
      speaker: "tyler_denk",
      quote_text: "I think we can build a multi-billion dollar business",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3834",
        date: "Sep 5, 2024",
        timestamp: "63:54"
      },
      context: "Tyler expressing his confidence in Beehiiv's potential scale",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["vision", "ambition", "market_potential", "confidence"]
    },
    {
      id: "tyler_denk_118",
      speaker: "tyler_denk",
      quote_text: "Today, Beehiiv is known for the velocity at which we relentlessly ship new features. That part of the company DNA stems almost entirely from Andrew",
      source: {
        type: "newsletter",
        url: "https://mail.bigdeskenergy.com/p/rip-andrew-platkin",
        date: "May 7, 2024",
        timestamp: ""
      },
      context: "Tyler crediting Andrew Platkin for establishing Beehiiv's culture of rapid feature development",
      mentioned_entities: ["tyler_denk", "beehiiv", "andrew_platkin"],
      tags: ["company_culture", "development_speed", "team_tribute", "feature_velocity"]
    },
    {
      id: "tyler_denk_119",
      speaker: "tyler_denk",
      quote_text: "There's a sense of urgency that percolates through me. Until we own a lot more of this market share, there is so much more to build",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4913",
        date: "Sep 5, 2024",
        timestamp: "81:53"
      },
      context: "Tyler explaining his driven personality and urgency in building Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["urgency", "competitive_drive", "market_share", "leadership_mindset"]
    },
    {
      id: "tyler_denk_120",
      speaker: "tyler_denk",
      quote_text: "Perfect kills momentum. Like the Reid Hoffman quote, 'If perfect, you shipped it way too late.' Unless it's touching money or something that is very fragile, we knowingly ship things 80%-85% done. Not blatantly missing something but not entirely polished. Because the last 10% can take so much time to guess how a user would use this. You can actually short circuit all of that by getting it in their hands and they'll tell you right away",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5047",
        date: "Sep 5, 2024",
        timestamp: "84:07"
      },
      context: "Tyler explaining Beehiiv's philosophy of shipping imperfect features to get user feedback faster",
      mentioned_entities: ["tyler_denk", "beehiiv", "reid_hoffman"],
      tags: ["product_philosophy", "shipping_strategy", "user_feedback", "iterative_development"]
    },
    {
      id: "tyler_denk_121",
      speaker: "tyler_denk",
      quote_text: "There's an acceptance of good enough and getting it in the users hands where a lot of founders are scared of negative criticism",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5095",
        date: "Sep 5, 2024",
        timestamp: "84:55"
      },
      context: "Tyler contrasting Beehiiv's approach to shipping with other founders' fear of criticism",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["product_mindset", "risk_tolerance", "user_feedback", "founder_psychology"]
    },
    {
      id: "tyler_denk_122",
      speaker: "tyler_denk",
      quote_text: "I send these project updates. I get 40 people telling me what's wrong with the feature and rather than that hurting my ego, I just synthesize it, put it into a doc and send to to the engineers and they fix it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5101",
        date: "Sep 5, 2024",
        timestamp: "85:01"
      },
      context: "Tyler describing his process for handling user feedback on weekly product updates",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["feedback_process", "ego_management", "product_updates", "continuous_improvement"]
    },
    {
      id: "tyler_denk_123",
      speaker: "tyler_denk",
      quote_text: "When we launched we were the shittiest product in the market because all the competitors had been around for a decade plus and we pieced together something over 10 months",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1611",
        date: "Sep 5, 2024",
        timestamp: "26:51"
      },
      context: "Tyler acknowledging Beehiiv's humble beginnings compared to established competitors",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["humility", "competitive_disadvantage", "startup_beginnings", "product_evolution"]
    },
    {
      id: "tyler_denk_124",
      speaker: "tyler_denk",
      quote_text: "I still feel that hustle. Our competitors are still 5-15 years ahead of us. There's so much to do",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1638",
        date: "Sep 5, 2024",
        timestamp: "27:18"
      },
      context: "Tyler expressing continued motivation driven by competitive pressure",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["competitive_pressure", "motivation", "hustle_mentality", "market_maturity"]
    },
    {
      id: "tyler_denk_125",
      speaker: "tyler_denk",
      quote_text: "Thinking through where the best employees live is such a distant and archaic way of thinking about how do we get the best person on our team contributing to what we want to do",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3714",
        date: "Sep 5, 2024",
        timestamp: "61:54"
      },
      context: "Tyler advocating for remote work and global talent acquisition",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["remote_work", "talent_acquisition", "global_team", "hiring_philosophy"]
    },
    {
      id: "tyler_denk_126",
      speaker: "tyler_denk",
      quote_text: "We would not be anywhere near where we are if I only had talent from Los Angeles",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?list=TLGG6WWzOpMQ_UgxOTExMjAyNA&t=5904",
        date: "Sep 12, 2023",
        timestamp: "98:24"
      },
      context: "Tyler emphasizing the importance of global talent for Beehiiv's success",
      mentioned_entities: ["tyler_denk", "beehiiv", "los_angeles"],
      tags: ["global_talent", "remote_hiring", "competitive_advantage", "talent_diversity"]
    },
    {
      id: "tyler_denk_127",
      speaker: "tyler_denk",
      quote_text: "We've been remote day one, so everything we've ever done in our processes is async and remote",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1453",
        date: "Sep 5, 2024",
        timestamp: "24:13"
      },
      context: "Tyler describing Beehiiv's remote-first DNA from inception",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["remote_first", "async_work", "company_dna", "work_processes"]
    },
    {
      id: "tyler_denk_128",
      speaker: "tyler_denk",
      quote_text: "We're a 100% remote company. So I'm in my room most of the day. For me to be out on a Wednesday outside of the office, it takes a lot for me to not think of the emails I'm missing. We're fully heads down",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1220",
        date: "Jul 30, 2023",
        timestamp: "20:20"
      },
      context: "Tyler describing his intense focus and the challenges of being constantly connected while remote",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["remote_work", "work_intensity", "focus", "work_life_balance"]
    },
    {
      id: "tyler_denk_129",
      speaker: "tyler_denk",
      quote_text: "Meetings are talking about doing things without actually doing them",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1662",
        date: "Sep 5, 2024",
        timestamp: "27:42"
      },
      context: "Tyler expressing his philosophy against excessive meetings",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["meeting_philosophy", "productivity", "action_oriented", "efficiency"]
    },
    {
      id: "tyler_denk_130",
      speaker: "tyler_denk",
      quote_text: "It goes to the DNA of what Beehiiv is. My 2 co-founders Ben Hargett and Jake Hurd and I are all engineers. We identified a need in a very crowded market. The only thing to do at the time was to put our heads down and build new features",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1596",
        date: "Sep 5, 2024",
        timestamp: "26:36"
      },
      context: "Tyler explaining how Beehiiv's engineering-first culture shaped their execution-focused approach",
      mentioned_entities: ["tyler_denk", "beehiiv", "ben_hargett", "jake_hurd"],
      tags: ["engineering_culture", "co_founders", "execution_focus", "company_dna"]
    },
    {
      id: "tyler_denk_131",
      speaker: "tyler_denk",
      quote_text: "Four out of our first five employees were all engineers",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1634",
        date: "Sep 5, 2024",
        timestamp: "27:14"
      },
      context: "Tyler highlighting Beehiiv's technical hiring focus in the early days",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["early_hiring", "engineering_focus", "team_composition", "technical_talent"]
    },
    {
      id: "tyler_denk_132",
      speaker: "tyler_denk",
      quote_text: "I feel most productive personally, and I project it into the rest of the team, when I can put in my headphones and focus on the 10 things I need to do and at the end of the day those 10 things are done",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1655",
        date: "Sep 5, 2024",
        timestamp: "27:35"
      },
      context: "Tyler describing his and the team's preference for deep work over meetings",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["productivity", "deep_work", "task_completion", "leadership_style"]
    },
    {
      id: "tyler_denk_133",
      speaker: "tyler_denk",
      quote_text: "The early DNA of the company was just being engineers who needed to build. We didn't need meetings, but eventually, we hired someone in support, community, and growth, and there needed to be some meetings. You quickly realize how context switching totally kills productivity in a small business. So, we did no meetings on Wednesday, and people would always leave Wednesdays saying, 'I just got so much done.' One day, someone said, 'I wish I had Wednesday but twice a week.' With no hesitation, I said, 'Say no more, Tuesday and Thursday will be focus days.' At this point, we were 50 people, so it was kind of hard to change it, but I made sure everyone moved their meetings around so there were absolutely zero meetings on Tuesday and Thursday",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3510",
        date: "Sep 5, 2024",
        timestamp: "58:30"
      },
      context: "Tyler explaining how Beehiiv evolved their no-meeting days policy to maximize productivity",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["meeting_policy", "productivity", "context_switching", "company_culture", "focus_time"]
    },
    {
      id: "tyler_denk_134",
      speaker: "tyler_denk",
      quote_text: "If I could do 5 days a week with no meetings, we'd be so productive. But then you start to play with the fact that we're entirely remote. We have meetings where we maintain a light, fun culture, where people get to know each other. There are very limited ways to connect with coworkers when you're entirely remote across 10-12 different countries. If you pull all of that fabric away, what's left? You're just on your computer coding. Maybe you're the most productive person in the world, but you have no idea about anyone else on the team. I'd say it's a delicate balance",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3566",
        date: "Sep 5, 2024",
        timestamp: "59:26"
      },
      context: "Tyler reflecting on balancing productivity with team culture in a remote environment",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["remote_culture", "team_bonding", "productivity_balance", "global_team", "meeting_balance"]
    },
    {
      id: "tyler_denk_135",
      speaker: "tyler_denk",
      quote_text: "Every single month, we have the third Friday as a wellness day, guaranteeing a three-day weekend every month",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?list=TLGG9RyQsbJm7bQyMDExMjAyNA&t=3482",
        date: "Sep 5, 2024",
        timestamp: "58:02"
      },
      context: "Tyler describing Beehiiv's wellness day policy inspired by his Google experience",
      mentioned_entities: ["tyler_denk", "beehiiv", "google"],
      tags: ["wellness_policy", "work_life_balance", "employee_benefits", "company_culture"]
    },
    {
      id: "tyler_denk_136",
      speaker: "tyler_denk",
      quote_text: "I don't care if you watch movies all day if you can get your work done. It's an outputs based business",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3754",
        date: "Sep 5, 2024",
        timestamp: "62:34"
      },
      context: "Tyler explaining Beehiiv's results-focused work culture",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["outcomes_based", "work_flexibility", "results_culture", "performance_management"]
    },
    {
      id: "tyler_denk_137",
      speaker: "tyler_denk",
      quote_text: "One-third of our team is engineers. Engineering is so output-driven. It's, 'Here are the 4 features we're launching next Thursday, and here are the 6 engineers in charge of that.' It either gets done or it doesn't. There's nowhere to hide",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?list=TLGG9RyQsbJm7bQyMDExMjAyNA&t=3741",
        date: "Sep 5, 2024",
        timestamp: "62:21"
      },
      context: "Tyler explaining how engineering work naturally supports their outcomes-based culture",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["engineering_team", "accountability", "feature_delivery", "performance_transparency"]
    },
    {
      id: "tyler_denk_138",
      speaker: "tyler_denk",
      quote_text: "We can say the same with support, both quantitatively and qualitatively. We have how many tickets are you responding to and your CSAT score",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3760",
        date: "Sep 5, 2024",
        timestamp: "62:40"
      },
      context: "Tyler describing how support team performance is measured at Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["customer_support", "performance_metrics", "csat_score", "quantitative_measurement"]
    },
    {
      id: "tyler_denk_139",
      speaker: "tyler_denk",
      quote_text: "For growth and marketing, is we need to grow faster, here are our sales objectives and it's are you delivering or are you not",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3769",
        date: "Sep 5, 2024",
        timestamp: "62:49"
      },
      context: "Tyler explaining performance expectations for growth and marketing teams",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["growth_team", "sales_objectives", "performance_accountability", "clear_expectations"]
    },
    {
      id: "tyler_denk_140",
      speaker: "tyler_denk",
      quote_text: "Without micromanaging, shit either gets done or it doesn't. And if you're not going to get it done well, we will find someone who can get it done well. That is the shared attitude",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3780",
        date: "Sep 5, 2024",
        timestamp: "63:00"
      },
      context: "Tyler describing Beehiiv's high-performance culture and accountability standards",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["high_performance", "accountability", "no_micromanaging", "performance_standards"]
    },
    {
      id: "tyler_denk_141",
      speaker: "tyler_denk",
      quote_text: "The type of work-culture we're looking for, it either repels you, as in, 'I want to do 9-to-5, I don't want to be held accountable for the outcome of my work.' Not in a bad way, but some people want to take control over what they're building and want to make an impact and want to be praised for the work that they do. Some people love that and thrive and there's enough of them. Some people don't want the accountability and they're just not a great fit for the business",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3887",
        date: "Sep 5, 2024",
        timestamp: "64:47"
      },
      context: "Tyler describing how Beehiiv's culture attracts high-ownership employees while filtering others",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["cultural_fit", "ownership_mindset", "accountability", "impact_driven", "cultural_filtering"]
    },
    {
      id: "tyler_denk_142",
      speaker: "tyler_denk",
      quote_text: "We hired someone out of college who was 20 y/o and he was shipping production code that was touching tens-of-thousands of paying users and making a huge difference within weeks",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3904",
        date: "Sep 5, 2024",
        timestamp: "65:04"
      },
      context: "Tyler giving example of how young talent can have immediate impact at Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["young_talent", "immediate_impact", "production_code", "talent_development"]
    },
    {
      id: "tyler_denk_143",
      speaker: "tyler_denk",
      quote_text: "We have an engineer who spent three weeks building a PWA feature, turning your newsletter and website into a mobile app. And we launched it and 500 people on twitter are posting about how awesome it is and the CEO and founder of Vercel Guillermo Rauch said 'This is an excellent example of PWA being used smartly'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3919",
        date: "Sep 5, 2024",
        timestamp: "65:19"
      },
      context: "Tyler celebrating engineering achievements that gain industry recognition",
      mentioned_entities: ["tyler_denk", "beehiiv", "vercel", "guillermo_rauch", "twitter"],
      tags: ["engineering_excellence", "pwa_feature", "industry_recognition", "feature_success"]
    },
    {
      id: "tyler_denk_144",
      speaker: "tyler_denk",
      quote_text: "But then on the flipside of outcome based, everyone at the company has equity in the company. Everyone is a shareholder. I run the business incredibly transparently. Everyone knows how much money we're making and burning. Everyone knows the bank account",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3789",
        date: "Sep 5, 2024",
        timestamp: "63:09"
      },
      context: "Tyler explaining how transparency and equity ownership balance the high-performance culture",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["equity_sharing", "transparency", "financial_openness", "employee_ownership"]
    },
    {
      id: "tyler_denk_145",
      speaker: "tyler_denk",
      quote_text: "I send a weekly email to the team and there's probably more complaints in there than there is positivity. But I want everyone to know exactly what is not working in the business because we've hired really smart people with trust in them to solve these problems, not to shield them",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3808",
        date: "Sep 5, 2024",
        timestamp: "63:28"
      },
      context: "Tyler describing his radical transparency approach in weekly team updates",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["radical_transparency", "team_communication", "problem_sharing", "trust_in_team"]
    },
    {
      id: "tyler_denk_146",
      speaker: "tyler_denk",
      quote_text: "I do the investor updates for me. The first investor update ever September 2021 was kind of, 'Oh, we just got $2.5m.' I almost felt like I owed them something as an acknowledgement. I've invested in a few small companies and when they take the money I never hear from them in 6 months",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4574",
        date: "Sep 5, 2024",
        timestamp: "76:14"
      },
      context: "Tyler explaining his motivation for sending regular investor updates",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["investor_relations", "accountability", "communication", "founder_responsibility"]
    },
    {
      id: "tyler_denk_147",
      speaker: "tyler_denk",
      quote_text: "Because I do send this monthly investor update to about 250 people including investors who passed, I'm constantly projecting our milestones, our revenue, our growth, these big users who are signing on. This leads to a lot of people reaching out, 'Hey, we'd love to lead your Series A' or 'We'd love to invest in your business'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4494",
        date: "Sep 5, 2024",
        timestamp: "74:54"
      },
      context: "Tyler describing how investor updates create fundraising leverage and inbound interest",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["investor_updates", "fundraising_leverage", "inbound_interest", "strategic_communication"]
    },
    {
      id: "tyler_denk_148",
      speaker: "tyler_denk",
      quote_text: "I found the exercise of writing the investor update to be very helpful in formulating my thoughts and I also send it to all 75 employees",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4619",
        date: "Sep 5, 2024",
        timestamp: "76:59"
      },
      context: "Tyler explaining the dual purpose of investor updates for both external and internal communication",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["thought_clarification", "internal_communication", "employee_updates", "dual_purpose"]
    },
    {
      id: "tyler_denk_149",
      speaker: "tyler_denk",
      quote_text: "The live investor updates that I send to our list of 250, that's private. But I have open sourced the old ones so you can sign up and receive the first one. As a startup nerd I think this is the coolest thing ever. You put in your email and you get month 1 September 2021. And then every single month after that you get October 2021, November 2021, December 2021, January 2022. So you actually do get an update, it's just two years delayed. It protects us because we're not sharing the secrets in real time. But for you it's almost as if you invested in the seed round kind of following the journey. It's building in public on my product. It's the most meta thing ever. I'm not just building in public, I'm doing it on Beehiiv. I copy-pasted the exact thing I sent that month into this automation that you get each month",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4715",
        date: "Sep 5, 2024",
        timestamp: "78:35"
      },
      context: "Tyler describing his innovative approach to sharing delayed investor updates publicly",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["building_in_public", "investor_transparency", "delayed_updates", "meta_marketing", "automation"]
    },
    {
      id: "tyler_denk_150",
      speaker: "tyler_denk",
      quote_text: "I learned it from Morning Brew. We would get dozens of people reaching out about how we built the referral program. For the first 15 times I would schedule an hour call and walk them through it because I thought it was cool to share that. And then I was like, 'Dude I've wasted 15 hours talking to random people about how to build this.' So I spent 10 hours writing a blog post. Any time someone came to me I sent them to the blog post",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=4674",
        date: "Sep 5, 2024",
        timestamp: "77:54"
      },
      context: "Tyler explaining how he learned the leverage of documentation over individual conversations at Morning Brew",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["documentation_leverage", "efficiency", "knowledge_sharing", "time_management", "scaling_communication"]
    },
    {
      id: "tyler_denk_151",
      speaker: "tyler_denk",
      quote_text: "The amount of anxiety of building something very slowly against fully-funded full-time teams (competitors) and I'm kind of battling egos with Alex and Austin who were my good friends and former bosses but I'm also taking two of their four engineers to co-found this company with me and there's legal implications. I don't know if I'm waking up with a non-compete or a non-solicit. A lot is going on while also having a full-time job while falling behind in this market while also having this dream vision of 'I think we can do this and pull it off but each day that we're not heads down on this we're getting further and further away from being able to compete.' It was just a ball of ten months of anxiety",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2937",
        date: "Sep 5, 2024",
        timestamp: "48:57"
      },
      context: "Tyler describing the intense anxiety and challenges of building Beehiiv while working at Google, dealing with potential legal issues and competing against well-funded teams",
      mentioned_entities: ["tyler_denk", "beehiiv", "google", "alex_lieberman", "austin_rief"],
      tags: ["anxiety", "startup_challenges", "competition", "legal_issues", "building_while_employed"]
    },
    {
      id: "tyler_denk_152",
      speaker: "tyler_denk",
      quote_text: "I did this in the most risky way possible because, at the time, I was still very young in my career and had a ton of debt. I couldn't just not make money and live in New York or LA while building a company. Plus, our company required software vendors with annual contracts of $80,000. So, we raised money in August 2021, and the second the money hit the bank account, I put in my two weeks' notice at Google. I started full-time at Beehiiv in early August 2021. It was me, Ben, and Jake as co-founders (who joined full-time a few weeks after Tyler) and we brought on Andrew Platkin as our initial CTO. So, it was us 4, just grinding and building. Then, we launched in November of 2021",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4517",
        date: "Jul 20, 2023",
        timestamp: "75:17"
      },
      context: "Tyler explaining the risky transition from Google to full-time Beehiiv work, the fundraising process, and early team formation",
      mentioned_entities: ["tyler_denk", "beehiiv", "google", "ben_hargett", "jake_hurd", "andrew_platkin"],
      tags: ["risk_taking", "fundraising", "career_transition", "team_building", "startup_launch"]
    },
    {
      id: "tyler_denk_153",
      speaker: "tyler_denk",
      quote_text: "I can't think about the grand vision after 8:00 p.m. because then I don't sleep. We have a really talented team, and we have a pretty well-defined roadmap for at least the next 12 to 24 months. I get really excited about what we're in the process of building",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5836",
        date: "Jul 20, 2023",
        timestamp: "97:16"
      },
      context: "Tyler discussing his approach to managing his thoughts about Beehiiv's future vision and maintaining work-life balance",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["work_life_balance", "vision", "team_management", "product_roadmap", "excitement"]
    },
    {
      id: "tyler_denk_154",
      speaker: "tyler_denk",
      quote_text: "If there's a writer who's going to spend 3 hours writing stories for a newsletter, whether you send it to one person or one-million people, that writer's work is the same. It's a fixed cost in terms of time and effort. Our job is to make the other parts easier. The monetization part, so you don't need a sales team; the growth part, so you don't need a growth team; the tech part, so you don't need a tech team. If you're amazing at writing about whatever you care about, the fact that we should be able to abstract away the tech, growth, and monetization at a very high level so you can focus on reaching your audience. That is the Holy Grail value prop of what we're doing for newsletters",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4986",
        date: "Jul 20, 2023",
        timestamp: "83:06"
      },
      context: "Tyler explaining Beehiiv's core value proposition - abstracting away technical complexity so creators can focus on content creation",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["value_proposition", "content_creation", "platform_strategy", "creator_economy", "abstraction"]
    },
    {
      id: "tyler_denk_155",
      speaker: "tyler_denk",
      quote_text: "Our kicker was, 'We're going to ride the momentum of Morning Brew's success and you're going to have a referral program built into it.' Now it's a bit more commoditized but that was our initial counter-positioning",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2906",
        date: "Sep 5, 2024",
        timestamp: "48:26"
      },
      context: "Tyler describing Beehiiv's initial go-to-market strategy leveraging Morning Brew's reputation and focusing on referral programs",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["positioning", "referral_programs", "go_to_market", "competitive_advantage", "momentum"]
    },
    {
      id: "tyler_denk_156",
      speaker: "tyler_denk",
      quote_text: "It was pure demand validation. People were asking for the referral program, the CMS, and the total package of what we had built",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1744",
        date: "Jul 20, 2023",
        timestamp: "29:04"
      },
      context: "Tyler explaining how customer demand for Morning Brew's internal tools validated the Beehiiv business idea",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["demand_validation", "product_market_fit", "cms", "referral_programs", "customer_feedback"]
    },
    {
      id: "tyler_denk_157",
      speaker: "tyler_denk",
      quote_text: "We always got a couple hundred replies each day [at Morning Brew]. What software are you using?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=1686",
        date: "Jul 20, 2023",
        timestamp: "28:06"
      },
      context: "Tyler describing the frequent customer inquiries about Morning Brew's technology stack that led to Beehiiv's creation",
      mentioned_entities: ["tyler_denk", "morning_brew", "beehiiv"],
      tags: ["customer_inquiries", "demand_validation", "software_stack", "business_opportunity"]
    },
    {
      id: "tyler_denk_158",
      speaker: "tyler_denk",
      quote_text: "The inception of Beehiiv happened way back at Morning Brew because we would always get inbound from readers saying, 'Your referral program is amazing, the newsletter's amazing. Can my team or organization use your tech, or how did you build this?' They were all hoping that we had an off-the-shelf solution to say, 'Oh, we just use platform X for the referral program,' or 'This is the CMS we use.' But the truth was, we had a custom-built referral program, a custom-built CMS, and a custom-built ad management system. The website was custom-built too. So there wasn't a simple 'Hey, just use this.' It was like, 'Oh, we built that,' and you can't access it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4219",
        date: "Jul 20, 2023",
        timestamp: "70:19"
      },
      context: "Tyler explaining the origin story of Beehiiv - how customer demand for Morning Brew's custom-built tools sparked the business idea",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["origin_story", "customer_demand", "custom_software", "business_opportunity", "referral_programs"]
    },
    {
      id: "tyler_denk_159",
      speaker: "tyler_denk",
      quote_text: "Being the person who led the development and made a lot of the decisions of how it worked and functioned, when people are like, 'Hey, I want to use this referral program, is there a software you can recommend us off-the-shelf?' The answer was, 'No. We built it in-house.' So it didn't solve their problem. I built that. I know exactly how it works",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1725",
        date: "Jul 20, 2023",
        timestamp: "28:45"
      },
      context: "Tyler explaining his unique position as the developer of Morning Brew's tools and how this expertise positioned him to create Beehiiv",
      mentioned_entities: ["tyler_denk", "morning_brew", "beehiiv"],
      tags: ["technical_expertise", "product_development", "referral_programs", "competitive_advantage", "insider_knowledge"]
    },
    {
      id: "tyler_denk_160",
      speaker: "tyler_denk",
      quote_text: "We know the pain points. We've seen the pain points. I've sat next to teams that were dealing with these pain points, and we're just building tech to help facilitate those and make it easier. So people can create the content they want to create, build a business around it, monetize, grow, and increase their influence. Meanwhile, we handle the annoying, boring stuff that they don't feel like doing, and they get all of the upside",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5588",
        date: "Jul 20, 2023",
        timestamp: "93:08"
      },
      context: "Tyler explaining Beehiiv's philosophy of solving real pain points for content creators by handling technical complexities",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["pain_points", "content_creation", "monetization", "creator_economy", "value_proposition"]
    },
    {
      id: "tyler_denk_161",
      speaker: "tyler_denk",
      quote_text: "The 10,000-foot view of how I'm able to communicate this now is that I went to Google for 10 months, got what I needed out of it, and then applied those learnings to Beehiiv. I knew I was rough around process and product management, and I didn't know what those things really looked like in an organization. I wanted to learn. I learned it as quickly as possible, I was like, 'Okay, that's how that works.' It works really well and scales at a large company with a lot of bureaucracy and process. Now, imagine a 5-6 person startup team. We could hypercharge this and make it so much more efficient. And that's why we've hit the ground running so quickly at Beehiiv",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4130",
        date: "Jul 20, 2023",
        timestamp: "68:50"
      },
      context: "Tyler explaining his strategic decision to work at Google to learn processes and product management before applying those skills at Beehiiv",
      mentioned_entities: ["tyler_denk", "google", "beehiiv"],
      tags: ["learning", "product_management", "process_optimization", "strategic_planning", "scaling"]
    },
    {
      id: "tyler_denk_162",
      speaker: "tyler_denk",
      quote_text: "What we went to market with as counter-positioning was: 'We have a referral program built into the newsletter.' Substack didn't offer it, all the traditional ESPs don't even think about growth, they just allow you to send emails",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2880",
        date: "Sep 5, 2024",
        timestamp: "48:00"
      },
      context: "Tyler describing Beehiiv's competitive positioning against Substack and traditional email service providers",
      mentioned_entities: ["tyler_denk", "beehiiv", "substack"],
      tags: ["competitive_positioning", "referral_programs", "growth_features", "market_differentiation", "esp"]
    },
    {
      id: "tyler_denk_163",
      speaker: "tyler_denk",
      quote_text: "And then at the same time, Substack just raised $65m (March 2021) at a $650m valuation. At the time twitter was just a bunch of angry Substack users",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1752",
        date: "Jul 20, 2023",
        timestamp: "29:12"
      },
      context: "Tyler commenting on Substack's major funding round and the sentiment among users on Twitter during Beehiiv's early days",
      mentioned_entities: ["tyler_denk", "substack", "twitter"],
      tags: ["competitive_landscape", "fundraising", "market_sentiment", "user_dissatisfaction", "opportunity"]
    },
    {
      id: "tyler_denk_164",
      speaker: "tyler_denk",
      quote_text: "Every vendor we looked at was web first. It was, 'Here's the SEO features and this is how you publish it to your website. And we were like, 'No we don't need to publish it to our website, we need it to look great in Outlook, Gmail and Apple mail.' The product didn't really exist in the market",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=883",
        date: "Sep 5, 2024",
        timestamp: "14:43"
      },
      context: "Tyler explaining the gap in the market that Beehiiv identified - email-first platforms versus web-first solutions",
      mentioned_entities: ["tyler_denk", "beehiiv", "outlook", "gmail"],
      tags: ["market_gap", "email_optimization", "product_differentiation", "market_research", "user_experience"]
    },
    {
      id: "tyler_denk_165",
      speaker: "tyler_denk",
      quote_text: "The analogy I always use is: Mailchimp sold for $12b (September 2021) and they just send emails. I think what we're building is so much more powerful",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5012",
        date: "Jul 20, 2023",
        timestamp: "83:32"
      },
      context: "Tyler comparing Beehiiv's comprehensive platform to Mailchimp's simpler email sending functionality to illustrate market opportunity",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["market_opportunity", "competitive_analysis", "platform_value", "acquisition_multiples", "vision"]
    },
    {
      id: "tyler_denk_166",
      speaker: "tyler_denk",
      quote_text: "We're not a website builder. We're not trying to replace your blog. We're trying to be the best newsletter platform that exists and we're trying to be really good at a few things versus trying to be everything to everyone",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3137",
        date: "Sep 5, 2024",
        timestamp: "52:17"
      },
      context: "Tyler clarifying Beehiiv's focused product strategy rather than trying to be a comprehensive content management solution",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["product_focus", "positioning", "newsletter_specialization", "strategic_clarity", "market_positioning"]
    },
    {
      id: "tyler_denk_167",
      speaker: "tyler_denk",
      quote_text: "We're very design forward and user focused",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3219",
        date: "Sep 5, 2024",
        timestamp: "53:39"
      },
      context: "Tyler describing Beehiiv's core values and approach to product development",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["design", "user_experience", "product_philosophy", "values", "focus"]
    },
    {
      id: "tyler_denk_168",
      speaker: "tyler_denk",
      quote_text: "A lot of being a founder is storytelling",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3845",
        date: "Sep 5, 2024",
        timestamp: "64:05"
      },
      context: "Tyler reflecting on the importance of narrative and communication skills in entrepreneurship",
      mentioned_entities: ["tyler_denk"],
      tags: ["leadership", "storytelling", "founder_skills", "communication", "entrepreneurship"]
    },
    {
      id: "tyler_denk_169",
      speaker: "tyler_denk",
      quote_text: "I love music. I listen to music all day long",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3726",
        date: "Jul 20, 2023",
        timestamp: "62:06"
      },
      context: "Tyler sharing his personal passion for music and how it's part of his daily routine",
      mentioned_entities: ["tyler_denk"],
      tags: ["personal_interests", "music", "lifestyle", "work_habits", "creativity"]
    },
    {
      id: "tyler_denk_170",
      speaker: "tyler_denk",
      quote_text: "I love startups. I've always wanted to build my own company. I'm obsessed with this",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2865",
        date: "Sep 5, 2024",
        timestamp: "47:45"
      },
      context: "Tyler expressing his deep passion for entrepreneurship and building companies",
      mentioned_entities: ["tyler_denk"],
      tags: ["entrepreneurship", "passion", "startups", "personal_motivation", "obsession"]
    },
    {
      id: "tyler_denk_171",
      speaker: "tyler_denk",
      quote_text: "For MailChimp's credit, the free-plan up to 5,000 subscribers, which I think they've scaled back since, is brilliant",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=618",
        date: "Sep 5, 2024",
        timestamp: "10:18"
      },
      context: "Tyler giving credit to Mailchimp's freemium strategy while discussing competitive landscape",
      mentioned_entities: ["tyler_denk", "mailchimp"],
      tags: ["competitive_analysis", "freemium_model", "business_strategy", "credit_where_due", "market_dynamics"]
    },
    {
      id: "tyler_denk_172",
      speaker: "tyler_denk",
      quote_text: "There's a before Twitter Elon and an after Twitter Elon. But what he was able to accomplish and his sense of building these businesses, anyone who's read the books, aside from a pure business acumen, it's hard to refute that what Elon has been able to accomplish is absolutely crazy. Totally redefining industries, making it normal to go to space, making it normal that people drive electric cars, and that's been tried so many times before",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=6016",
        date: "Sep 5, 2024",
        timestamp: "100:16"
      },
      context: "Tyler expressing admiration for Elon Musk's business accomplishments while acknowledging the change in public perception",
      mentioned_entities: ["tyler_denk", "elon_musk", "twitter", "spacex", "tesla"],
      tags: ["leadership_admiration", "industry_disruption", "business_acumen", "innovation", "perspective_change"]
    },
    {
      id: "tyler_denk_173",
      speaker: "tyler_denk",
      quote_text: "Brian Chesky from Airbnb is a total role model CEO. A standup person. Very thoughtful. I love traveling. Airbnb is a beautifully polished product. I'm a huge fan of the product itself, but the way that he has built the business and conducts himself, I think he's a total class act",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=6044",
        date: "Sep 5, 2024",
        timestamp: "100:44"
      },
      context: "Tyler expressing deep admiration for Brian Chesky's leadership style and product execution at Airbnb",
      mentioned_entities: ["tyler_denk", "brian_chesky", "airbnb"],
      tags: ["leadership_admiration", "role_models", "product_excellence", "character", "business_conduct"]
    },
    {
      id: "tyler_denk_174",
      speaker: "tyler_denk",
      quote_text: "To balance the Elon answer in terms of new Elon, Brian Chesky, I think, is an absolute stud as a CEO and a really product design-driven person",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=6075",
        date: "Sep 5, 2024",
        timestamp: "101:15"
      },
      context: "Tyler contrasting his admiration for Brian Chesky with his more complex feelings about Elon Musk's recent behavior",
      mentioned_entities: ["tyler_denk", "brian_chesky", "elon_musk"],
      tags: ["leadership_comparison", "product_design", "ceo_qualities", "role_models", "balance"]
    },
    {
      id: "tyler_denk_175",
      speaker: "tyler_denk",
      quote_text: "One of my favorite quotes is Ben Thompson saying: 'The internet is so much bigger than you think it is'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=2691",
        date: "Jul 30, 2023",
        timestamp: "44:51"
      },
      context: "Tyler sharing a quote that resonates with him about the vast opportunities available on the internet",
      mentioned_entities: ["tyler_denk", "ben_thompson"],
      tags: ["favorite_quotes", "internet_opportunity", "market_size", "inspiration", "strategic_thinking"]
    },
    {
      id: "tyler_denk_176",
      speaker: "tyler_denk",
      quote_text: "I would actually attribute most of my success in my career to putting myself in situations where I was way over my head because I'm not someone who's ever going to give up. When you're not going to give up and you're way over your head, the only way is up—hustling and figuring it out, whether it means late nights, watching tutorials online, scheduling calls with people who know what they're doing, and learning from them. There are multiple paths to figure out how to solve whatever problem",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=368",
        date: "Sep 12, 2023",
        timestamp: "06:08"
      },
      context: "Tyler explaining his approach to career growth by taking on challenges beyond his current capabilities and persevering through them",
      mentioned_entities: ["tyler_denk"],
      tags: ["career_growth", "perseverance", "learning_mindset", "hustle", "problem_solving", "self_improvement"]
    },
    {
      id: "tyler_denk_177",
      speaker: "tyler_denk",
      quote_text: "At the end of the day, I think most content creators care about two things: growing and monetizing. If you can create tools that allow them to grow quicker and monetize more, most content creators, businesses, and publishers are very happy",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=1178",
        date: "Sep 12, 2023",
        timestamp: "19:38"
      },
      context: "Tyler explaining the core needs of content creators and how Beehiiv addresses these fundamental concerns",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["creator_economy", "growth", "monetization", "content_creators", "value_proposition", "market_understanding"]
    },
    {
      id: "tyler_denk_178",
      speaker: "tyler_denk",
      quote_text: "My favorite word, I tell everyone this and they make fun of me, is serendipity. Because there are so many chance events that happen in life that open one door and lead to something which leads to another thing",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=727",
        date: "Jul 30, 2023",
        timestamp: "12:07"
      },
      context: "Tyler sharing his philosophy about the role of chance and unexpected opportunities in shaping his career path",
      mentioned_entities: ["tyler_denk"],
      tags: ["serendipity", "opportunity", "life_philosophy", "chance_events", "personal_values", "career_path"]
    },
    {
      id: "tyler_denk_179",
      speaker: "tyler_denk",
      quote_text: "I'm very disciplined with focus. I say no to a lot of things but I'm only in this situation because I happened to say yes to certain things that have opened the door elsewhere",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=746",
        date: "Jul 30, 2023",
        timestamp: "12:26"
      },
      context: "Tyler explaining his approach to opportunity management - being selective while remaining open to serendipitous moments",
      mentioned_entities: ["tyler_denk"],
      tags: ["focus", "discipline", "opportunity_selection", "strategic_thinking", "balance", "decision_making"]
    },
    {
      id: "tyler_denk_180",
      speaker: "tyler_denk",
      quote_text: "Early in my career, it was almost always yes to everything. If someone reached out on LinkedIn and said, 'Do you want to chat?' I'd be like, 'Yes, let's do it.' I had time and the trade off at 21-22 y/o was what doors exist, what relationships could I make. I was a total 'yes guy'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=767",
        date: "Jul 30, 2023",
        timestamp: "12:47"
      },
      context: "Tyler describing his early career strategy of saying yes to opportunities to build relationships and explore possibilities",
      mentioned_entities: ["tyler_denk"],
      tags: ["early_career", "networking", "opportunity", "relationship_building", "yes_mentality", "career_strategy"]
    },
    {
      id: "tyler_denk_181",
      speaker: "tyler_denk",
      quote_text: "I'd say in my personal life I'm still very much a 'yes guy' but as the business mature saying no is actually power",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=792",
        date: "Jul 30, 2023",
        timestamp: "13:12"
      },
      context: "Tyler explaining how his approach to opportunities has evolved as his business has grown and matured",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["personal_growth", "business_maturity", "saying_no", "power", "evolution", "leadership"]
    },
    {
      id: "tyler_denk_182",
      speaker: "tyler_denk",
      quote_text: "There's been a few people where there's a bit of friction in the early days and you just hope magically they're going to be a different person and start contributing, caring more and working harder but that never happens. And it's always a moral drainer. When you're so good at bringing on A players, you actually discredit how annoying it is for them to have to put up with someone who is putting a B+/C- effort",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5706",
        date: "Sep 5, 2024",
        timestamp: "95:06"
      },
      context: "Tyler discussing the challenges of managing underperforming team members and the impact on high performers",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["team_management", "hiring", "performance_management", "difficult_decisions", "team_dynamics", "morale"]
    },
    {
      id: "tyler_denk_183",
      speaker: "tyler_denk",
      quote_text: "I'm a people person, it sucks firing people, it sucks admitting that you were wrong and ruining someone's week, month or career trajectory",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5782",
        date: "Sep 5, 2024",
        timestamp: "96:22"
      },
      context: "Tyler expressing the emotional difficulty of making firing decisions despite being people-focused",
      mentioned_entities: ["tyler_denk"],
      tags: ["leadership_challenges", "firing", "empathy", "difficult_decisions", "people_management", "emotional_burden"]
    },
    {
      id: "tyler_denk_184",
      speaker: "tyler_denk",
      quote_text: "I am potentially very OCD, and I need a foundation before building. I had the idea with my co-founders that we could build a platform that does this, and then it's like, 'Okay, what do we do next? Do we start building? What colors do we choose? What's the foundation?' For me, as a dreamer or someone with inspiration and goals, I need to envision it. Envisioning it means asking, 'What does this look like when it's successful?' Part of that boils down to the name and what this thing is going to look like one year, three years, or five years from now.",
      source: {
        type: "video_interview",
        url: "https://youtu.be/h2bvuIPMC0Q?t=2018",
        date: "Aug 13, 2024",
        timestamp: "33:38"
      },
      context: "Tyler explaining his methodical approach to building Beehiiv and the importance of establishing a strong foundation and vision",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["planning", "vision", "foundation", "methodical_approach", "long_term_thinking", "branding"]
    },
    {
      id: "tyler_denk_185",
      speaker: "tyler_denk",
      quote_text: "When it comes to personal life now, especially since I'm so heads down on the business, I've found that my hobbies are a 180° from what I do day-to-day for the business. For the business I'm in my room, alone, heads-down, 12-14 hours, just grinding and stressed. So my hobbies now are hiking, surfing, yoga, and being outside. I think the southern California lifestyle is pretty elite",
      source: {
        type: "video_interview",
        url: "https://youtu.be/IfMfAoREp_E?t=849",
        date: "Sep 10, 2024",
        timestamp: "14:09"
      },
      context: "Tyler describing how he balances his intense work schedule with outdoor activities that provide contrast to his business focus",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["work_life_balance", "hobbies", "california_lifestyle", "outdoor_activities", "stress_relief", "contrast"]
    },
    {
      id: "tyler_denk_186",
      speaker: "tyler_denk",
      quote_text: "I wake up at 5:30am every day, Monday through Friday. I do my morning routine, hit the gym, and am back in my room, showered and plugged in by 8:00am",
      source: {
        type: "video_interview",
        url: "https://mail.bigdeskenergy.com/p/sunshine-rainbows",
        date: "Apr 9, 2024",
        timestamp: "N/A"
      },
      context: "Tyler describing his structured daily routine and early morning discipline",
      mentioned_entities: ["tyler_denk"],
      tags: ["daily_routine", "discipline", "morning_routine", "gym", "productivity", "structure"]
    },
    {
      id: "tyler_denk_187",
      speaker: "tyler_denk",
      quote_text: "When I go to Colombia, it's focus to the max. I get all of these invites and for the 4 months that I'm in Colombia, it is default no",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=6146",
        date: "Sep 5, 2024",
        timestamp: "102:26"
      },
      context: "Tyler explaining his extreme focus approach when spending winters in Colombia, eliminating distractions",
      mentioned_entities: ["tyler_denk"],
      tags: ["focus", "colombia", "productivity", "saying_no", "deep_work", "seasonal_strategy"]
    },
    {
      id: "tyler_denk_188",
      speaker: "tyler_denk",
      quote_text: "I've spent the past 2 winters in Medellín, Colombia. It's funny because I have such little balance in my life. The way I find balance isn't, 'Oh, maybe I'll stop work at 6 p.m. on a Thursday and go out to dinner.' It's, 'Let me pick up and move to an entirely different continent and immerse myself there.' That is how I've been able to find a bit of balance. I'm also learning Spanish. I've done Airbnbs down in Colombia. I hate the cold, and it sounds funny living in LA, but it gets a little cold in the winter and a totally different cultural experience to be in Colombia, learn a different language, and meet different people",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=6095",
        date: "Sep 5, 2024",
        timestamp: "101:35"
      },
      context: "Tyler explaining his unique approach to work-life balance through extreme geographic changes rather than daily time management",
      mentioned_entities: ["tyler_denk"],
      tags: ["work_life_balance", "colombia", "medellin", "cultural_immersion", "spanish_learning", "extreme_balance", "travel"]
    },
    {
      id: "tyler_denk_189",
      speaker: "tyler_denk",
      quote_text: "So for my personal newsletter, I did a mastermind in Costa Rica. So events. And I have the attention of 40,000 founders and startup people, and I sold them 7 spots. That's how I generated revenue off my newsletter because I'm in their inbox and I built this relationship with them",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1027",
        date: "Sep 5, 2024",
        timestamp: "17:07"
      },
      context: "Tyler describing how he monetized his Big Desk Energy newsletter through a premium mastermind event in Costa Rica",
      mentioned_entities: ["tyler_denk", "big_desk_energy"],
      tags: ["newsletter_monetization", "events", "mastermind", "costa_rica", "relationship_building", "premium_offerings"]
    },
    {
      id: "tyler_denk_190",
      speaker: "tyler_denk",
      quote_text: "Didn't think weekends would perform well for those who use business emails. Friday's have too many holidays and feel like people are often checking out for the weekend ahead. I think Monday's people are catching up on tons of emails and getting back from their weekend. So it left a tossup between T/W/Th and I thought Tuesday was best for people being earlier in the week, motivated, focused, etc",
      source: {
        type: "video_interview",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7225887023046234113",
        date: "Aug 4, 2024",
        timestamp: "N/A"
      },
      context: "Tyler explaining his strategic thinking behind choosing Tuesday as the optimal day to send his newsletter",
      mentioned_entities: ["tyler_denk", "big_desk_energy"],
      tags: ["newsletter_strategy", "timing", "audience_behavior", "email_optimization", "strategic_thinking"]
    },
    {
      id: "tyler_denk_191",
      speaker: "tyler_denk",
      quote_text: "My audience is 60% founders, rest mostly startup employees",
      source: {
        type: "video_interview",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7259223531450679296",
        date: "Nov 4, 2024",
        timestamp: "N/A"
      },
      context: "Tyler describing the composition of his Big Desk Energy newsletter audience",
      mentioned_entities: ["tyler_denk", "big_desk_energy"],
      tags: ["audience_composition", "founders", "startup_employees", "newsletter_demographics", "target_market"]
    },
    {
      id: "tyler_denk_192",
      speaker: "tyler_denk",
      quote_text: "Now I know. We use Cloudflare. I know all of our vendors, and we have an account manager with all of them. I know if Stripe goes down, it causes these problems. We're aware of them and can make the trade-off of having backups. It was a very tough lesson to learn but a very important one",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5367",
        date: "Sep 5, 2024",
        timestamp: "89:27"
      },
      context: "Tyler reflecting on lessons learned about vendor management and having backup systems after experiencing service outages",
      mentioned_entities: ["tyler_denk", "beehiiv", "cloudflare", "stripe"],
      tags: ["vendor_management", "risk_management", "backups", "lessons_learned", "business_operations", "account_managers"]
    },
    {
      id: "tyler_denk_193",
      speaker: "tyler_denk",
      quote_text: "Understanding where your weaknesses or vulnerabilities are as a business. You should know any day that you wake up, if Stripe goes down, you're not accepting payments unless you have a fallback, right? But I think every founder should know their blind spots and what happens if something goes wrong. The certainty that you thought was certain suddenly becomes uncertain, and the business would run into a ton of problems",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5167",
        date: "Sep 5, 2024",
        timestamp: "86:07"
      },
      context: "Tyler sharing advice about understanding business vulnerabilities and having contingency plans for critical systems",
      mentioned_entities: ["tyler_denk", "stripe", "beehiiv"],
      tags: ["risk_management", "business_vulnerabilities", "contingency_planning", "founder_advice", "blind_spots", "business_operations"]
    },
    {
      id: "tyler_denk_194",
      speaker: "tyler_denk",
      quote_text: "Obviously, if we had an account manager, this would have never happened. Trying to get in contact with their support and escalating through their overseas chat support in Indonesia to save the business, essentially. I went full nuclear. I'm tweeting out, emailing, sending a code red to all investors in our investor update, and sharing the whole story of them shutting down our account",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5279",
        date: "Sep 5, 2024",
        timestamp: "87:59"
      },
      context: "Tyler describing his desperate efforts to resolve a critical service outage that threatened Beehiiv's operations",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["crisis_management", "customer_support", "escalation_tactics", "business_continuity", "social_pressure", "investor_communication"]
    },
    {
      id: "tyler_denk_195",
      speaker: "tyler_denk",
      quote_text: "I'm pleading with this person on chat support in Indonesia, saying, 'If you don't fix this, this entire business is going to go under. We have 10 employees, and they will be unemployed next week if we cannot get our users' websites and our website back up",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5305",
        date: "Sep 5, 2024",
        timestamp: "88:25"
      },
      context: "Tyler recounting his desperate plea to customer support during a critical business-threatening service outage",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["crisis_management", "customer_support", "business_survival", "employee_responsibility", "desperation", "leadership_pressure"]
    },
    {
      id: "tyler_denk_196",
      speaker: "tyler_denk",
      quote_text: "Through pleading and finding the emails and phone numbers of every executive at GoDaddy, I finally got the account back in good standing. We moved off GoDaddy the next day, and now I'm very vocal about absolutely hating GoDaddy",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=5320",
        date: "Sep 5, 2024",
        timestamp: "88:40"
      },
      context: "Tyler describing how he resolved the GoDaddy crisis and his subsequent strong negative feelings toward the company",
      mentioned_entities: ["tyler_denk", "beehiiv", "godaddy"],
      tags: ["crisis_resolution", "vendor_switching", "executive_escalation", "customer_experience", "public_criticism", "lessons_learned"]
    },
    {
      id: "tyler_denk_197",
      speaker: "tyler_denk",
      quote_text: "My last newsletter sponsor saw absurd results - 39 demos booked, $240k ARR, ~50x ROAS, 2 sends, full audience",
      source: {
        type: "video_interview",
        url: "https://www.linkedin.com/posts/tyler-denk_my-last-newsletter-sponsor-saw-absurd-results-activity-7259223531450679296-nO9c",
        date: "Nov 4, 2024",
        timestamp: "N/A"
      },
      context: "Tyler sharing impressive ROI metrics from a sponsor's campaign in his Big Desk Energy newsletter",
      mentioned_entities: ["tyler_denk", "big_desk_energy"],
      tags: ["newsletter_monetization", "sponsor_results", "roas", "arr", "performance_metrics", "advertising_effectiveness"]
    },
    {
      id: "tyler_denk_198",
      speaker: "tyler_denk",
      quote_text: "The next Mailchimp? Email SaaS Hit $15m Revenue Last Month",
      source: {
        type: "video_interview",
        url: "https://www.youtube.com/watch?v=so-8GxtvFGA",
        date: "Aug 20, 2024",
        timestamp: "N/A"
      },
      context: "Tyler discussing Beehiiv's impressive revenue milestone and positioning relative to Mailchimp",
      mentioned_entities: ["tyler_denk", "beehiiv", "mailchimp"],
      tags: ["revenue_milestone", "market_positioning", "saas_growth", "competitive_comparison", "success_metrics"]
    },
    {
      id: "tyler_denk_199",
      speaker: "tyler_denk",
      quote_text: "How I Built It: $225M Newsletter Startup",
      source: {
        type: "video_interview",
        url: "https://youtu.be/hZunLjk_5QA",
        date: "Oct 10, 2024",
        timestamp: "N/A"
      },
      context: "Tyler discussing the journey of building Beehiiv to a $225M valuation",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["startup_journey", "valuation", "company_building", "success_story", "newsletter_platform"]
    },
    {
      id: "tyler_denk_200",
      speaker: "tyler_denk",
      quote_text: "I Built a $225M Business in 3 Years (From Home)",
      source: {
        type: "video_interview",
        url: "https://youtu.be/IfMfAoREp_E",
        date: "Sep 10, 2024",
        timestamp: "N/A"
      },
      context: "Tyler reflecting on building Beehiiv to a $225M valuation in just 3 years while working remotely",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["remote_work", "rapid_growth", "valuation", "time_to_success", "home_business", "achievement"]
    },
    {
      id: "tyler_denk_201",
      speaker: "tyler_denk",
      quote_text: "I graduated with a bunch of student debt and my company didn't take off. So, I was living in my parents' basement with literally $2.50 in my bank account. I had put all my eggs in one basket, thinking that this company was going to be a multi-billion dollar success, because you have to be delusional as a founder. I was left with nothing. Fortunately, I was at my parents' house, so I started building Shopify stores and taking on random freelance gigs as a self-taught developer",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=262",
        date: "2024-09-05",
        timestamp: "4:22"
      },
      context: "Tyler describing his post-graduation financial struggles and the reality check that led to his freelance development work",
      mentioned_entities: ["tyler_denk", "shopify"],
      tags: ["personal_story", "founding_journey", "financial_struggles"]
    },
    {
      id: "tyler_denk_202",
      speaker: "tyler_denk",
      quote_text: "I became very fascinated with Shopify. I thought it was such a powerful platform. I ended up doing a lot of freelance work building Shopify sites",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=217",
        date: "2023-07-30",
        timestamp: "3:37"
      },
      context: "Tyler explaining his early fascination with Shopify as a platform and how it became his initial freelance focus",
      mentioned_entities: ["tyler_denk", "shopify"],
      tags: ["early_career", "freelance_work", "platform_fascination"]
    },
    {
      id: "tyler_denk_203",
      speaker: "tyler_denk",
      quote_text: "I was on an hour-long car ride home from DC and Austin was venting [on the call] about the business and the opportunity. This was when Morning Brew probably had 30,000-40,000 subscribers. He was debating raising money and going full time or taking a big investment banking job in New York. One thing he said was, 'Did you know Barstool is making 40% of their revenue through merch?' or whatever the number was. He was interested in merch, and I said, 'Dude, I got you.' Shopify was my thing. I said, 'Let me help you build,' because they had some brand affinity with the mug and the logo, and people wanted t-shirts, hats, or coffee mugs. So the first idea was, 'I'll help you build a Shopify store'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=126",
        date: "2023-09-12",
        timestamp: "2:06"
      },
      context: "Tyler recounting the pivotal phone call with Austin that led to his involvement with Morning Brew, starting with merchandise",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew", "barstool_sports", "shopify"],
      tags: ["morning_brew_founding", "business_opportunity", "merchandise", "subscriber_count"]
    },
    {
      id: "tyler_denk_204",
      speaker: "tyler_denk",
      quote_text: "We started talking, and he said theSkimm is growing so quickly. They were trailblazers in the newsletter space, with millions of subscribers. They had the Skimm'bassadors program, a referral program that worked really well. All these girls in New York who read it loved their ambassador program and were always sharing it. He said, 'We should imitate that'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=170",
        date: "2023-09-12",
        timestamp: "2:50"
      },
      context: "Tyler describing Austin's inspiration from theSkimm's referral program that would become foundational to Morning Brew's growth strategy",
      mentioned_entities: ["tyler_denk", "austin_rief", "theskimm", "morning_brew"],
      tags: ["referral_programs", "newsletter_inspiration", "growth_strategies"]
    },
    {
      id: "tyler_denk_205",
      speaker: "tyler_denk",
      quote_text: "I straight-faced told him, 'Yeah, absolutely, no problem.' Even though I had no idea how to do it. I had $2.50 in my bank account and he offered me $3,000 to do it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=351",
        date: "2024-09-05",
        timestamp: "5:51"
      },
      context: "Tyler admitting to confidently accepting the referral program project despite having no experience, driven by financial necessity",
      mentioned_entities: ["tyler_denk"],
      tags: ["confidence", "financial_need", "contract_work", "fake_it_til_you_make_it"]
    },
    {
      id: "tyler_denk_206",
      speaker: "tyler_denk",
      quote_text: "For 3 weeks, I was building this referral program, making it up as I went. I had no idea what I was doing and almost quit 5 separate times. At 2 a.m., I'd be up thinking, 'I lied about being able to do this, and I have no idea how to get past this point.' I almost texted him to give up but didn't. I finished it and he paid me $3,000",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=210",
        date: "2023-09-12",
        timestamp: "3:30"
      },
      context: "Tyler describing the intense struggle of building his first referral program, highlighting his perseverance despite feeling like an imposter",
      mentioned_entities: ["tyler_denk"],
      tags: ["struggle", "perseverance", "learning_on_the_job", "imposter_syndrome"]
    },
    {
      id: "tyler_denk_207",
      speaker: "tyler_denk",
      quote_text: "Then [Austin] said, 'We have so many other projects to build. If you want to keep working with us throughout the summer while you apply for full-time jobs, let's do it.' So I started contracting for them, working 40-60 hours a week, building the website, improving the referral program, and creating different components for the newsletter",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=232",
        date: "2023-09-12",
        timestamp: "3:52"
      },
      context: "Tyler explaining how his initial $3,000 project evolved into extensive contract work that laid the foundation for his future role at Morning Brew",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew"],
      tags: ["contract_work", "career_development", "relationship_building"]
    },
    {
      id: "tyler_denk_208",
      speaker: "tyler_denk",
      quote_text: "I had $120,000 of student debt from paying for school myself. So the safe move was to go to DC, live with my friend, and work at Deloitte as a consultant. I had signed the offer and was set to start in two weeks when Austin reached out and said, 'What do you think about joining Morning Brew full-time and coming up to New York?'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=250",
        date: "2023-09-12",
        timestamp: "4:10"
      },
      context: "Tyler describing the difficult decision between financial security at Deloitte and the risky opportunity at Morning Brew",
      mentioned_entities: ["tyler_denk", "deloitte", "austin_rief", "morning_brew"],
      tags: ["career_decision", "student_debt", "risk_vs_safety", "consulting"]
    },
    {
      id: "tyler_denk_209",
      speaker: "tyler_denk",
      quote_text: "In retrospect, it seems like a no-brainer. Morning Brew went on to be very successful. But when I joined, they had 50,000 subscribers, two co-founders and a writer in a NYU dorm-room-office thing. I had so much debt and it was such a risk. One of my friends, who I asked for career advice, said, 'You're going to be 1 of 50,000 people in that job at Deloitte doing the same thing or the only person in the world building Morning Brew and doing that.' I completely bet on myself, dropped my girlfriend, left life in DC, and moved to New York within 2 months. That's how I got into Morning Brew",
      source: {
        type: "video_interview",
        url: "https://youtu.be/Dc4CGW6loPQ?t=269",
        date: "2023-09-12",
        timestamp: "4:29"
      },
      context: "Tyler reflecting on the pivotal career decision to join Morning Brew, emphasizing the unique opportunity versus corporate safety",
      mentioned_entities: ["tyler_denk", "morning_brew", "deloitte"],
      tags: ["career_pivotal_moment", "betting_on_yourself", "unique_opportunity", "personal_sacrifice"]
    },
    {
      id: "tyler_denk_210",
      speaker: "tyler_denk",
      quote_text: "As a small startup, they gave me full control of the inbox and everything that was going on. Every time we pressed send, we would get 500 replies of people being like, 'I absolutely love this newsletter, I can't start my day without reading it.' That reader feedback gave me the buy-in that there's something here. You can sell education, you can do advertising, you can do events. There's so much opportunity if you have the attention of these people",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=483",
        date: "2024-09-05",
        timestamp: "8:03"
      },
      context: "Tyler describing the early validation he received at Morning Brew through direct reader feedback and the business potential he recognized",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["early_responsibility", "reader_engagement", "business_opportunity", "attention_economy"]
    },
    {
      id: "tyler_denk_211",
      speaker: "tyler_denk",
      quote_text: "I owe Austin and Alex so much. One is they didn't have the bandwidth to micromanage me and tell me what to do. So, they gave me all of their trust and faith. Like, 'We trust you, we hired you, just figure out how to grow this newsletter and build this ecosystem.' And so, I was 22, building the core infrastructure of how we're sending emails, how our writers are using the platform, and how our readers are interacting with our content. I don't have a boss, I don't have a mentor, it's just a figure-it-out situation, which is amazing",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1173",
        date: "2024-09-05",
        timestamp: "19:33"
      },
      context: "Tyler expressing gratitude for the autonomy Austin and Alex gave him at Morning Brew and how it accelerated his learning",
      mentioned_entities: ["tyler_denk", "austin_rief", "alex_lieberman", "morning_brew"],
      tags: ["autonomy", "trust", "early_responsibility", "infrastructure_building"]
    },
    {
      id: "tyler_denk_212",
      speaker: "tyler_denk",
      quote_text: "I was building for the internal team. The CMS that we built was for the content team. We built an ad management platform for the ad sales team and the copywriting team used to manage the ad inventory. And we built dashboards for the growth team. At the end of the day I was building tech for 40ish internal employees and some consumer facing stuff",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3529",
        date: "2023-07-30",
        timestamp: "58:49"
      },
      context: "Tyler explaining the comprehensive internal tooling he built at Morning Brew that would later inspire Beehiiv",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["internal_tools", "cms", "ad_management", "dashboards", "team_support"]
    },
    {
      id: "tyler_denk_213",
      speaker: "tyler_denk",
      quote_text: "The CMS we built in-house. Our writers created the newsletter. We made it custom fit to what Morning Brew is. You can drag and drop the stories around. There's the referral program. Press send in one place, it goes to the website and email. We could've pieced together and paid tens-of-thousands of dollars for off-the-shelf software but I took a risk on myself to build it ourselves and it ended up working great",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=898",
        date: "2024-09-05",
        timestamp: "14:58"
      },
      context: "Tyler describing the custom-built content management system at Morning Brew that demonstrated the value of in-house development",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["custom_development", "cms", "build_vs_buy", "technical_capabilities"]
    },
    {
      id: "tyler_denk_214",
      speaker: "tyler_denk",
      quote_text: "I actually pitched to white-label what we built at Morning Brew to Alex and Austin and said, 'Why don't we do this? Everyone's asking us for this software. What if you just gave me 3 months, and we made it so anyone could sign up and use the software we built at Morning Brew? Instead of it being for our employees, it could be for anyone,' which is Beehiiv essentially",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4252",
        date: "2023-07-20",
        timestamp: "70:52"
      },
      context: "Tyler describing the original pitch for what would become Beehiiv - white-labeling Morning Brew's internal tools",
      mentioned_entities: ["tyler_denk", "morning_brew", "alex_lieberman", "austin_rief", "beehiiv"],
      tags: ["product_vision", "white_labeling", "beehiiv_origins", "product_pitch"]
    },
    {
      id: "tyler_denk_215",
      speaker: "tyler_denk",
      quote_text: "I didn't know that they were already in acquisition talks. It's hard to be in the late eighth-inning of an acquisition and then be like, 'Oh, we're actually now a SAAS platform.' So I understand why they didn't want to do it. Plus, a lot of media companies have tried to become tech companies and failed. Risk-adjusted, I get it. Morning Brew is working really well as is, so why pivot to being a SAAS company with a 2 person engineering team, led by someone who's self-taught and has never built a SAAS product before?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4271",
        date: "2023-07-20",
        timestamp: "71:11"
      },
      context: "Tyler reflecting on why Austin and Alex rejected his Beehiiv pitch, understanding their perspective given the acquisition context",
      mentioned_entities: ["tyler_denk", "austin_rief", "alex_lieberman", "morning_brew"],
      tags: ["acquisition_timing", "business_strategy", "media_to_tech_pivot", "risk_assessment"]
    },
    {
      id: "tyler_denk_216",
      speaker: "tyler_denk",
      quote_text: "There were 3 of us in a closet-sized office for years, just building this business. But in anything with startups and that type of culture, there's a lot of egos and emotion, and there's a lot going on. There was so much to build, and 3.5 years later, I kind of scratched that itch, and we were optimizing the website, which is a little bit less exciting for me. And of course, I have these broad ambitions and an ego of, 'Hey, I built all this, I want to be paid a lot more, I want more equity,' and Austin is very pragmatic, and he's like, 'No, you're four years out of college, this is what the going rate is.'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1250",
        date: "2024-09-05",
        timestamp: "20:50"
      },
      context: "Tyler describing the personal and professional tensions that led to his departure from Morning Brew",
      mentioned_entities: ["tyler_denk", "austin_rief", "morning_brew"],
      tags: ["startup_dynamics", "compensation_disputes", "career_progression", "workplace_tension"]
    },
    {
      id: "tyler_denk_217",
      speaker: "tyler_denk",
      quote_text: "After 3.5 years that ecosystem was very robust. The writing was on the wall that we were legitimizing into a 50+ person company. Not that I didn't want a boss but I knew that there was going to be an incoming head of product from Vice or Vox, and it was going to get more complicated",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3562",
        date: "2023-07-20",
        timestamp: "59:22"
      },
      context: "Tyler explaining his foresight about Morning Brew's organizational evolution and why it motivated his departure",
      mentioned_entities: ["tyler_denk", "morning_brew", "vice", "vox"],
      tags: ["organizational_growth", "company_evolution", "career_anticipation", "corporate_structure"]
    },
    {
      id: "tyler_denk_218",
      speaker: "tyler_denk",
      quote_text: "I love the 3-30 person company, that was exhilarating to me and there was no red tape and I was calling the shots and doing what I wanted. I learned a lot and got what I needed out of that experience but the writing on the wall was that I wasn't going to be on the senior leadership team forever and that they were going to bring in product managers from other media organizations and me personally, maybe being stubborn, I didn't want learn from other product managers",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=3582",
        date: "2023-07-20",
        timestamp: "59:42"
      },
      context: "Tyler explaining his preference for small company dynamics and his resistance to traditional corporate structure",
      mentioned_entities: ["tyler_denk"],
      tags: ["company_size_preference", "autonomy", "learning_style", "corporate_resistance"]
    },
    {
      id: "tyler_denk_219",
      speaker: "tyler_denk",
      quote_text: "I left maybe not in the most mature terms. I didn't just pick up and leave, but I was like, 'Yo, I got a job at YouTube Music, and I'm out in 2 weeks.' And I was the first person in the core early team to peace out",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1308",
        date: "2024-09-05",
        timestamp: "21:48"
      },
      context: "Tyler admitting to handling his departure from Morning Brew immaturely, being the first early employee to leave",
      mentioned_entities: ["tyler_denk", "google", "morning_brew"],
      tags: ["career_transition", "departure_style", "first_to_leave", "immaturity_admission"]
    },
    {
      id: "tyler_denk_220",
      speaker: "tyler_denk",
      quote_text: "I had no idea that they were in talks with Business Insider to get acquired, And, literally, I think the second week on the YouTube Music job, I woke up one morning and got a notification from 20 of my friends: 'Yo, congrats! I can't believe Morning Brew just got bought.' So, I think that also leads to the drama and the emotion tied up. Austin, little did I know, was in hardcore negotiations to make millions and millions of dollars, and now a core person on his team is leaving weeks before",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1327",
        date: "2024-09-05",
        timestamp: "22:07"
      },
      context: "Tyler discovering Morning Brew's acquisition after leaving, realizing the poor timing of his departure",
      mentioned_entities: ["tyler_denk", "business_insider", "morning_brew", "austin_rief", "google"],
      tags: ["acquisition_discovery", "timing_irony", "missed_opportunity", "team_dynamics"]
    },
    {
      id: "tyler_denk_221",
      speaker: "tyler_denk",
      quote_text: "I had a week in between Morning Brew and YouTube. I was supposed to go to San Diego and do normal things like relax and travel. I got Covid so I couldn't travel",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4183",
        date: "2023-07-20",
        timestamp: "69:43"
      },
      context: "Tyler describing the unexpected circumstances that led to him starting Beehiiv during his transition period",
      mentioned_entities: ["tyler_denk", "morning_brew", "google"],
      tags: ["transition_period", "covid_impact", "travel_plans", "unexpected_circumstances"]
    },
    {
      id: "tyler_denk_222",
      speaker: "tyler_denk",
      quote_text: "I'm just sitting in my room in Brooklyn, thinking, 'What am I going to do for a week? Can't really go outside, can't travel.' I was kind of pissed off that I wasn't in San Diego, so I called Ben Hargett (co-founder) and said, 'We've always talked about productizing Morning Brew and building out the tech there. What if we just built that?' We had a few calls, and he brought in Jake Hurd, who he went to school with, he became our third co-founder. We mapped it out, and Ben goes, 'Dude, it's a lot of work. That's pretty damn ambitious to build out a whole email platform that does everything. Morning Brew took us 5 engineers and 3.5 years. Not only do you want to do that, but you also want to make it a platform that anyone can just sign up and start using on their own?' And that was kind of the start of it, at the end of 2020",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4412",
        date: "2023-07-20",
        timestamp: "73:32"
      },
      context: "Tyler recounting the founding moment of Beehiiv during COVID isolation, bringing together his co-founders",
      mentioned_entities: ["tyler_denk", "ben_hargett", "jake_hurd", "beehiiv", "morning_brew"],
      tags: ["beehiiv_founding", "co_founder_recruitment", "ambition", "platform_vision"]
    },
    {
      id: "tyler_denk_223",
      speaker: "tyler_denk",
      quote_text: "Ten months building at glacial speed because it's nights and weekends for me and my co-founders",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2918",
        date: "2024-09-05",
        timestamp: "48:38"
      },
      context: "Tyler describing the slow initial progress on Beehiiv while maintaining full-time jobs",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["nights_and_weekends", "slow_progress", "part_time_building"]
    },
    {
      id: "tyler_denk_224",
      speaker: "tyler_denk",
      quote_text: "The amount of anxiety of building something very slowly against fully-funded full-time teams (competitors) and I'm kind of battling egos with Alex and Austin who were my good friends and former bosses but I'm also taking two of their four engineers to co-found this company with me and there's legal implications. I don't know if I'm waking up with a non-compete or a non-solicit. A lot is going on while also having a full-time job while falling behind in this market while also having this dream vision of 'I think we can do this and pull it off but each day that we're not heads down on this we're getting further and further away from being able to compete.' It was just a ball of ten months of anxiety",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2937",
        date: "2024-09-05",
        timestamp: "48:57"
      },
      context: "Tyler describing the intense anxiety and complexity of building Beehiiv while navigating relationships with former employers and legal concerns",
      mentioned_entities: ["tyler_denk", "beehiiv", "alex_lieberman", "austin_rief"],
      tags: ["anxiety", "competition_pressure", "legal_concerns", "relationship_management"]
    },
    {
      id: "tyler_denk_225",
      speaker: "tyler_denk",
      quote_text: "I did this in the most risky way possible because, at the time, I was still very young in my career and had a ton of debt. I couldn't just not make money and live in New York or LA while building a company. Plus, our company required software vendors with annual contracts of $80,000. So, we raised money in August 2021, and the second the money hit the bank account, I put in my two weeks' notice at Google. I started full-time at Beehiiv in early August 2021",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4517",
        date: "2023-07-20",
        timestamp: "75:17"
      },
      context: "Tyler explaining the high-risk approach of building Beehiiv while maintaining financial obligations and vendor requirements",
      mentioned_entities: ["tyler_denk", "beehiiv", "google"],
      tags: ["high_risk_approach", "financial_constraints", "fundraising", "full_time_transition"]
    },
    {
      id: "tyler_denk_226",
      speaker: "tyler_denk",
      quote_text: "If there's a writer who's going to spend 3 hours writing stories for a newsletter, whether you send it to one person or one-million people, that writer's work is the same. It's a fixed cost in terms of time and effort. Our job is to make the other parts easier. The monetization part, so you don't need a sales team; the growth part, so you don't need a growth team; the tech part, so you don't need a tech team. If you're amazing at writing about whatever you care about, the fact that we should be able to abstract away the tech, growth, and monetization at a very high level so you can focus on reaching your audience. That is the Holy Grail value prop of what we're doing for newsletters",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4986",
        date: "2023-07-20",
        timestamp: "83:06"
      },
      context: "Tyler articulating Beehiiv's core value proposition of abstracting away everything except content creation for newsletter writers",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["value_proposition", "abstraction", "writer_focus", "holy_grail"]
    },
    {
      id: "tyler_denk_227",
      speaker: "tyler_denk",
      quote_text: "Our kicker was, 'We're going to ride the momentum of Morning Brew's success and you're going to have a referral program built into it.' Now it's a bit more commoditized but that was our initial counter-positioning",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2906",
        date: "2024-09-05",
        timestamp: "48:26"
      },
      context: "Tyler describing Beehiiv's initial competitive differentiation strategy leveraging Morning Brew's referral program success",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["competitive_differentiation", "referral_programs", "counter_positioning"]
    },
    {
      id: "tyler_denk_228",
      speaker: "tyler_denk",
      quote_text: "We always got a couple hundred replies each day [at Morning Brew]. What software are you using?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1686",
        date: "2023-07-20",
        timestamp: "28:06"
      },
      context: "Tyler describing the demand validation for Beehiiv that came from Morning Brew reader inquiries about their tooling",
      mentioned_entities: ["tyler_denk", "morning_brew"],
      tags: ["demand_validation", "reader_inquiries", "market_validation"]
    },
    {
      id: "tyler_denk_229",
      speaker: "tyler_denk",
      quote_text: "The inception of Beehiiv happened way back at Morning Brew because we would always get inbound from readers saying, 'Your referral program is amazing, the newsletter's amazing. Can my team or organization use your tech, or how did you build this?' They were all hoping that we had an off-the-shelf solution to say, 'Oh, we just use platform X for the referral program,' or 'This is the CMS we use.' But the truth was, we had a custom-built referral program, a custom-built CMS, and a custom-built ad management system. The website was custom-built too. So there wasn't a simple 'Hey, just use this.' It was like, 'Oh, we built that,' and you can't access it",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4219",
        date: "2023-07-20",
        timestamp: "70:19"
      },
      context: "Tyler explaining how the demand for Morning Brew's tools from other publishers led to the conceptualization of Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["beehiiv_inception", "demand_generation", "custom_tools", "market_need"]
    },
    {
      id: "tyler_denk_230",
      speaker: "tyler_denk",
      quote_text: "The 10,000-foot view of how I'm able to communicate this now is that I went to Google for 10 months, got what I needed out of it, and then applied those learnings to Beehiiv. I knew I was rough around process and product management, and I didn't know what those things really looked like in an organization. I wanted to learn. I learned it as quickly as possible, I was like, 'Okay, that's how that works.' It works really well and scales at a large company with a lot of bureaucracy and process. Now, imagine a 5-6 person startup team. We could hypercharge this and make it so much more efficient. And that's why we've hit the ground running so quickly at Beehiiv",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4130",
        date: "2023-07-20",
        timestamp: "68:50"
      },
      context: "Tyler explaining how his time at Google was strategic learning for better execution at Beehiiv",
      mentioned_entities: ["tyler_denk", "google", "beehiiv"],
      tags: ["strategic_learning", "process_improvement", "startup_efficiency"]
    },
    {
      id: "tyler_denk_231",
      speaker: "tyler_denk",
      quote_text: "A lot of it comes from the insecurities of being a very new product and needing to build whatever narrative you can that people are actually building this product",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3193",
        date: "2024-09-05",
        timestamp: "53:13"
      },
      context: "Tyler explaining the psychological drivers behind Beehiiv's building in public strategy",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["building_in_public", "insecurities", "narrative_building"]
    },
    {
      id: "tyler_denk_232",
      speaker: "tyler_denk",
      quote_text: "People moving over having a good experience, sharing it, knowing that they're going to get a retweet from me, my co-founders, our house account and it kind of builds this narrative on social media that as an innocent bystander scrolling through your feed you sees 7 people who just moved into Beehiiv and it kind of sets in, 'Oh everyone is moving to Beehiiv' It just creates a narrative of a successful product",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3233",
        date: "2024-09-05",
        timestamp: "53:53"
      },
      context: "Tyler describing how Beehiiv amplifies user migrations on social media to create momentum and social proof",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["social_proof", "migration_narrative", "amplification_strategy"]
    },
    {
      id: "tyler_denk_233",
      speaker: "tyler_denk",
      quote_text: "We ship a lot of new features and that comes from the insecurities of, 'Yes we launched but we're missing 20 of the largest features that every competitor has in this market.' The only way to be able to communicate that we're working on it is we ship as quickly as we possibly can. We send an email to all of our users that says, 'Hey we just launched this feature.' It sends a signal of: 'Hey you don't need to churn, we now offer this.' It reassures existing users. And then we promote it on social, a bunch of people share it and it becomes leadgen. It's churn reduction and top-of-funnel awareness",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3283",
        date: "2024-09-05",
        timestamp: "54:43"
      },
      context: "Tyler explaining how rapid feature shipping serves both to reduce churn and generate new leads for Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["rapid_shipping", "churn_reduction", "lead_generation", "feature_parity"]
    },
    {
      id: "tyler_denk_234",
      speaker: "tyler_denk",
      quote_text: "When you ship 2-3 new features every single week then the narrative shifts to, 'Yes, they're still missing 10 things but they shipped so many features that by the time I migrate over they'll probably already have addressed those things. They're very aware that they're missing things and they're addressing them as quickly as possible'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3342",
        date: "2024-09-05",
        timestamp: "55:42"
      },
      context: "Tyler describing how consistent feature shipping changes customer perception about Beehiiv's development trajectory",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["development_trajectory", "customer_perception", "rapid_iteration"]
    },
    {
      id: "tyler_denk_235",
      speaker: "tyler_denk",
      quote_text: "A lot of it is psychology, narrative and building momentum. A lot of it is convincing people not to churn because we are listening to them and building things. And then convincing people that were blocked that we're aware and prioritizing things that they were previously blocked on",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3359",
        date: "2024-09-05",
        timestamp: "55:59"
      },
      context: "Tyler explaining the psychological aspects of Beehiiv's rapid development and communication strategy",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["psychology", "momentum_building", "customer_retention"]
    },
    {
      id: "tyler_denk_236",
      speaker: "tyler_denk",
      quote_text: "If I only tweeted about email newsletters all day, that is a very small segment of the world who actually gives a shit. But if I expand to 'This is how we hire,' 'This is our onboarding philosophy,' 'Here's the milestones,' 'Here's the difficult decisions we've made about how we've structured our team.' That now appeals to a very large base of people who are generally interested in entrepreneurship, startups, business and that's a much bigger market",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3384",
        date: "2024-09-05",
        timestamp: "56:24"
      },
      context: "Tyler explaining his content strategy of appealing to the broader startup community rather than just newsletter creators",
      mentioned_entities: ["tyler_denk"],
      tags: ["content_strategy", "market_expansion", "startup_community"]
    },
    {
      id: "tyler_denk_237",
      speaker: "tyler_denk",
      quote_text: "If I can win the ear of someone who is just interested in startups and entrepreneurship, because they don't give a shit about emails but they're interested about how we run this remote first company, then I have a fan in them, and when they're at a dinner and someone talks about their email newsletter they can easily be like, 'Hey, I follow this guy Tyler, he runs this company Beehiiv I think you should give him a shot'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=3414",
        date: "2024-09-05",
        timestamp: "56:54"
      },
      context: "Tyler describing how building a broader personal brand creates indirect referral opportunities for Beehiiv",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["personal_branding", "indirect_referrals", "network_effects"]
    },
    {
      id: "tyler_denk_238",
      speaker: "tyler_denk",
      quote_text: "We have a CTO. We have a COO. We have a VP of Finance. And then we have team-leads. A Head of Sales. A Head of Marketing. A Head of Growth. A Head of Talent. A Head of Customer Support. We have a bunch of different heads of different orgs",
      source: {
        type: "video_interview",
        url: "https://youtu.be/IfMfAoREp_E?t=887",
        date: "2024-09-10",
        timestamp: "14:47"
      },
      context: "Tyler describing Beehiiv's organizational structure as it scaled to 75 employees",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["organizational_structure", "scaling", "leadership_team"]
    },
    {
      id: "tyler_denk_239",
      speaker: "tyler_denk",
      quote_text: "Our largest team by a decent amount is tech. Which is engineering, data and product. That makes up 25-30 people. Our other biggest team is customer support, customer success. Having a large support team has been very helpful for us",
      source: {
        type: "video_interview",
        url: "https://youtu.be/IfMfAoREp_E?t=908",
        date: "2024-09-10",
        timestamp: "15:08"
      },
      context: "Tyler explaining Beehiiv's team composition and the strategic importance of customer support",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["team_composition", "tech_focus", "customer_support"]
    },
    {
      id: "tyler_denk_240",
      speaker: "tyler_denk",
      quote_text: "The value we provide is being able to bring you advertisers that are relatable to your audience",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5525",
        date: "2023-07-20",
        timestamp: "92:05"
      },
      context: "Tyler describing the core value proposition of Beehiiv's ad network for newsletter creators",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["ad_network", "value_proposition", "audience_relevance"]
    },
    {
      id: "tyler_denk_241",
      speaker: "tyler_denk",
      quote_text: "You have a 20,000 person list because you're amazing at writing about sports, not because you know how to do brand advertising, sales, and monetization. So, how do we allow you to keep writing about sports and allow us to help you monetize?",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4835",
        date: "2023-07-20",
        timestamp: "80:35"
      },
      context: "Tyler explaining how Beehiiv's ad network allows creators to focus on content while handling monetization",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["creator_focus", "monetization_abstraction", "core_competency"]
    },
    {
      id: "tyler_denk_242",
      speaker: "tyler_denk",
      quote_text: "As a publisher, I'm writing the newsletter that I was going to write anyway. And I'm getting an opportunity from Netflix to pay me a $2-$3 cost per click. I get the brand validation of having Netflix's logo at the top of my newsletter. I did no selling, no testing, no copywriting, no reporting and money was deposited into my account just from accepting the ad. So it really is a win-win situation. And once you start using a ton of first party data, we have machine learning engineers building all of these different models, it becomes extremely performant. And basically tapping into untapped inventory that would've went unsold previously",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2343",
        date: "2024-09-05",
        timestamp: "39:03"
      },
      context: "Tyler describing the seamless experience for publishers using Beehiiv's ad network with major brands",
      mentioned_entities: ["tyler_denk", "beehiiv", "netflix"],
      tags: ["seamless_monetization", "brand_validation", "machine_learning"]
    },
    {
      id: "tyler_denk_243",
      speaker: "tyler_denk",
      quote_text: "And on the brand side: if you want to get in front of women in their 30s because that's where you are most likely to get conversions, you can come to us and we know based on our best in class 1st party data. Some newsletter operators don't know what data to collect, how to collect it, or what to ask for. But we can tell brands, 'We have 8,000 newsletters with the majority of the audience is women in their 30s. We can get you in front of them and diversify your spend.'",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4859",
        date: "2023-07-20",
        timestamp: "80:59"
      },
      context: "Tyler explaining how Beehiiv's first-party data enables targeted advertising for brands across their newsletter network",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["first_party_data", "targeted_advertising", "data_advantage"]
    },
    {
      id: "tyler_denk_244",
      speaker: "tyler_denk",
      quote_text: "So it's better for newsletters because they're getting inbound ad opportunities from brands they probably couldn't contact on their own or it's not a core competency. And we can go to brands and say: 'We can target the people that you want across our network of newsletters based on all of our first party data.' And it really is at scale a win-win-win that we're trying to build. That's the Holy Grail",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=4886",
        date: "2023-07-20",
        timestamp: "81:26"
      },
      context: "Tyler describing the three-way value creation (win-win-win) that Beehiiv's ad network aims to achieve",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["three_way_value", "win_win_win", "holy_grail_business"]
    },
    {
      id: "tyler_denk_245",
      speaker: "tyler_denk",
      quote_text: "What you give up in working with the ad network is the narrative of: 'This is exactly who our audience is.' You will get a better rate if you're out in the market negotiating yourself. What you're getting by working with us is that you don't have to do that work",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5474",
        date: "2023-07-20",
        timestamp: "91:14"
      },
      context: "Tyler honestly explaining the trade-offs of using Beehiiv's ad network versus direct sales",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["honest_trade_offs", "rate_vs_convenience", "value_proposition"]
    },
    {
      id: "tyler_denk_246",
      speaker: "tyler_denk",
      quote_text: "You are writing your newsletter to your 10,000 dental professionals about what is hot in the dental industry, what are different trends, what are different studies and as you're writing you see an inbound opportunity from Crest come in and they're paying you $40 CPM and you can press one button, add it to the newsletter and then we'll send you a wire for $3,000 a few weeks later and you don't know anyone at Crest. You didn't do any of the work, no copywriting, you aren't reporting, you aren't doing any tracking. You just press the button",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5493",
        date: "2023-07-20",
        timestamp: "91:33"
      },
      context: "Tyler providing a specific example of how effortless monetization works through Beehiiv's ad network",
      mentioned_entities: ["tyler_denk", "beehiiv", "crest"],
      tags: ["effortless_monetization", "one_button_solution", "specific_example"]
    },
    {
      id: "tyler_denk_247",
      speaker: "tyler_denk",
      quote_text: "We know the pain points. We've seen the pain points. I've sat next to teams that were dealing with these pain points, and we're just building tech to help facilitate those and make it easier. So people can create the content they want to create, build a business around it, monetize, grow, and increase their influence. Meanwhile, we handle the annoying, boring stuff that they don't feel like doing, and they get all of the upside",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5588",
        date: "2023-07-20",
        timestamp: "93:08"
      },
      context: "Tyler explaining how his Morning Brew experience gives Beehiiv deep insight into newsletter operator pain points",
      mentioned_entities: ["tyler_denk", "beehiiv", "morning_brew"],
      tags: ["pain_point_knowledge", "experience_advantage", "content_creator_focus"]
    },
    {
      id: "tyler_denk_248",
      speaker: "tyler_denk",
      quote_text: "What we went to market with as counter-positioning was: 'We have a referral program built into the newsletter.' Substack didn't offer it, all the traditional ESPs don't even think about growth, they just allow you to send emails",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=2880",
        date: "2024-09-05",
        timestamp: "48:00"
      },
      context: "Tyler describing Beehiiv's initial competitive positioning against Substack and traditional email service providers",
      mentioned_entities: ["tyler_denk", "beehiiv", "substack"],
      tags: ["competitive_positioning", "referral_programs", "growth_focus"]
    },
    {
      id: "tyler_denk_249",
      speaker: "tyler_denk",
      quote_text: "I can't think about the grand vision after 8:00 p.m. because then I don't sleep. We have a really talented team, and we have a pretty well-defined roadmap for at least the next 12 to 24 months. I get really excited about what we're in the process of building",
      source: {
        type: "video_interview",
        url: "https://youtu.be/lZYIRPtU4xQ?t=5836",
        date: "2023-07-20",
        timestamp: "97:16"
      },
      context: "Tyler describing how he manages his excitement about Beehiiv's future to maintain work-life balance",
      mentioned_entities: ["tyler_denk", "beehiiv"],
      tags: ["work_life_balance", "vision_management", "team_confidence"]
    },
    {
      id: "tyler_denk_250",
      speaker: "tyler_denk",
      quote_text: "Being the person who led the development and made a lot of the decisions of how it worked and functioned, when people are like, 'Hey, I want to use this referral program, is there a software you can recommend us off-the-shelf?' The answer was, 'No. We built it in-house. So it didn't solve their problem. I built that. I know exactly how it works",
      source: {
        type: "video_interview",
        url: "https://youtu.be/k2ezi6HM5XQ?t=1725",
        date: "2023-07-20",
        timestamp: "28:45"
      },
      context: "Tyler explaining his unique position as both the builder and user of Morning Brew's tools that became Beehiiv's foundation",
      mentioned_entities: ["tyler_denk", "morning_brew", "beehiiv"],
      tags: ["unique_position", "builder_user", "market_knowledge"]
    }
  ],
  relationships: [
    {
      id: "rel_001",
      type: "co_founded",
      subject: "tyler_denk",
      object: "beehiiv",
      temporal: "end of 2020",
      evidence_excerpts: ["tyler_denk_020"]
    },
    {
      id: "rel_002",
      type: "worked_at",
      subject: "tyler_denk",
      object: "morning_brew",
      role: "second full-time employee",
      temporal: "June 2017 - October 2020",
      duration: "3.5 years",
      evidence_excerpts: ["tyler_denk_008", "tyler_denk_009", "tyler_denk_010", "tyler_denk_012"]
    },
    {
      id: "rel_003",
      type: "co_founded",
      subject: "austin_rief",
      object: "morning_brew",
      evidence_excerpts: ["tyler_denk_003", "tyler_denk_004"]
    },
    {
      id: "rel_004",
      type: "advisor_to",
      subject: "austin_rief",
      object: "beehiiv",
      temporal: "present",
      evidence_excerpts: ["tyler_denk_019"]
    },
    {
      id: "rel_005",
      type: "worked_at",
      subject: "tyler_denk",
      object: "google",
      role: "YouTube Music employee",
      duration: "10 months",
      temporal: "October 2020 - August 2021",
      evidence_excerpts: ["tyler_denk_017", "tyler_denk_018"]
    },
    {
      id: "rel_006",
      type: "friends_with",
      subject: "tyler_denk",
      object: "austin_rief",
      temporal: "pre-Morning Brew",
      evidence_excerpts: ["tyler_denk_003", "tyler_denk_019"]
    },
    {
      id: "rel_011",
      type: "invested_in",
      subject: "social_leverage",
      object: "beehiiv",
      temporal: "seed round",
      evidence_excerpts: []
    },
    {
      id: "rel_012",
      type: "invested_in",
      subject: "nea",
      object: "beehiiv",
      temporal: "Series B",
      evidence_excerpts: []
    },
    {
      id: "rel_013",
      type: "acquired",
      subject: "business_insider",
      object: "morning_brew",
      evidence_excerpts: []
    },
    {
      id: "rel_014",
      type: "inspired",
      subject: "theskimm",
      object: "morning_brew",
      temporal: "referral program development",
      evidence_excerpts: []
    },
    {
      id: "rel_015",
      type: "works_at",
      subject: "daniel_berk",
      object: "beehiiv",
      role: "Senior Manager",
      evidence_excerpts: []
    },
    {
      id: "rel_016",
      type: "works_at",
      subject: "tony_varghese",
      object: "beehiiv",
      role: "Senior Marketing Manager",
      evidence_excerpts: []
    },
    {
      id: "rel_017",
      type: "co_founded",
      subject: "ben_hargett",
      object: "beehiiv",
      temporal: "end of 2020",
      evidence_excerpts: []
    },
    {
      id: "rel_018",
      type: "co_founded",
      subject: "jake_hurd",
      object: "beehiiv",
      temporal: "end of 2020",
      evidence_excerpts: []
    },
    {
      id: "rel_019",
      type: "worked_at",
      subject: "ben_hargett",
      object: "morning_brew",
      role: "engineer",
      temporal: "before Beehiiv",
      evidence_excerpts: []
    },
    {
      id: "rel_020",
      type: "worked_at",
      subject: "jake_hurd",
      object: "morning_brew",
      role: "engineer",
      temporal: "before Beehiiv",
      evidence_excerpts: []
    },
    {
      id: "rel_021",
      type: "worked_at",
      subject: "andrew_platkin",
      object: "morning_brew",
      role: "CTO",
      evidence_excerpts: []
    },
    {
      id: "rel_022",
      type: "inspired",
      subject: "reid_hoffman",
      object: "tyler_denk",
      temporal: "shipping products philosophy",
      evidence_excerpts: []
    },
    {
      id: "rel_023",
      type: "inspired",
      subject: "brian_chesky",
      object: "tyler_denk",
      temporal: "company building approach",
      evidence_excerpts: []
    },
    {
      id: "rel_024",
      type: "inspired",
      subject: "elon_musk",
      object: "tyler_denk",
      temporal: "innovation mindset",
      evidence_excerpts: []
    }
  ]
};