export const nationalEvents = [
    {
        id: 51,
        eventName: "HackTech",
        department: "National Event",
        categories: ["NATIONAL"],
        type: "Inter",
        team: true,
        location: "Online",
        date: "25th OCT",
        time: "9 AM",
        event_coordinators: [
          {
            name: "Kanchan Patil",
            phone: "918208069554",
          },
          {
            name: "Vailanka Dias",
            phone: "919371834101",
          },
        ],
        rules: {
          Rules: [
            "The contest shall consist of solving a series of challenges to reach the goal.",
            "The contest will mainly deal with computer-based puzzles and tasks. Your knowledge of Computers, the internet (latest happenings around the world) and related technical and Non-technical stuff will be put to the test.",
          ],
          "Round 1 rules": [
            "1 Student/participant.",
            "25 MCQ/Questions to be answered in 60min.",
            "The first one to successfully reach the goal, completing all challenges will qualify for round 2.",
            "Internet access is allowed.",
          ],
          "Round 2 rules": [
            "1 Student/participant.",
            "15 Questions to be answered in 45min.",
            "The first one to successfully reach the goal, completing all challenges will be declared the winner.- In case of a Tie there will be a Tie breaker Question.",
            "Internet access is allowed.",
            "Platform- Google Forms",
          ],
          FAQs: [
            "1. Who can participate? <br/> Ans - Any student from Padre Conceicao College of Engineering irrespective of their department can participate. ",
            "2. Is there a registration fee? <br/> Ans - No registration fee",
            "3. What should you have? <br/> Ans - A PC/Laptop with internet access and preferably Google Chrome browser installed.",
            "Decision taken by Co-Ordinators will be final in case any discrepancies!",
          ],
        },
        prize: [1500, 500],
        //!this is to be changed
        form: "https://forms.gle/NpJYvGRYX2mfiPPv5", // upstop link
        poster: "/assets/images/posters/comp/decrypt.jpg",
        rulebook: "../rulebook/COMP/decrypt.pdf",
        image: "https://raw.githubusercontent.com/TECHYON2022/techyonAssets/main/COMP/thumbnail/HackTech.png",
      },
]