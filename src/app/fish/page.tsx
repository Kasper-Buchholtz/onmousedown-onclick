
export default function Fish() {

let fishes = [
  {
    name: "Tuna",
    rarity: "common",
    health: 100
  },
  {
    name: "Salmon",
    rarity: "common",
    health: 100
  },
  {
    name: "Cod",
    rarity: "common",
    health: 100
  },
  {
    name: "Haddock",
    rarity: "common",
    health: 100
  },
  {
    name: "garfish",
    rarity: 'rare',
    health: 100
  },
  {
    name: "Mackerel",
    rarity: 'rare',
    health: 100

  },
  {
    name: "Mackerel 1",
    rarity: 'legendary',
    health: 100
  },
  {
    name: "Mackerel 2",
    rarity: 'epic',
    health: 100
  }
];

    /**
     * Retrieves a random fish based on its rarity.
     * @summary This function will return a random fish based on its rarity.
     * @note https://www.reddit.com/r/DMAcademy/comments/5il667/comment/dba3uvj/?context=3&share_id=a5Xo_GF7ABSaGE3fZ9v3P&utm_content=1&utm_medium=ios_app&utm_name=ioscss&utm_source=share&utm_term=1
     * @returns {Fish | null} The randomly selected fish.
     * @example getRandomFishUsingRarity();
     * @usage getRandomFishUsingRarity();
     * @param {Fish[]} fishes - The array of fishes to select from
     * @type Common(60%) | Uncommen(30%) | Rare(6%) | Very Rare(3%) | Legendary(1%)
     */

    function getRandomFishUsingRarity() {
      let random = Math.random() * 100;
      let fish = null;
      let fishIndex = null;
      let fishRarity = 0;

      for (let i = 0; i < fishes.length; i++) {
        const rarityPercentages = {
          common: 60,
          rare: 20,
          epic: 5,
          legendary: 1
        };

        fishRarity = rarityPercentages[fishes[i].rarity as keyof typeof rarityPercentages];

        if (random <= fishRarity) {
          fish = fishes[i];
          fishIndex = i;
          break;
        }
      }

      if (fish === null) {
        fish = fishes[fishes.length - 1];
        fishIndex = fishes.length - 1;
      }

      return fish;
    }
    console.log(getRandomFishUsingRarity());

    let fish = getRandomFishUsingRarity();
  return (
    <section className="min-h-screen pt-40 container mx-auto">
      <div className="bg-white rounded text-center">
        <h2 className="text-6xl">{fish.name}</h2>
        <p>{fish.rarity}</p>
        <p>{fish.health}</p>
      </div>
    </section>
  );
}
