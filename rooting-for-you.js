const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];


const metric = 'redness';


const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let position = 0;

  for(let i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > highest){
      highest = vegetables[i][metric];
      position = i;
    }
  }

  return vegetables[position].submitter;
};

//vegetables.sort(metric);
//return vegetables[i].submitter;

  
console.log(judgeVegetable(vegetables, metric));









/*const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let theWinningMetric = 0;
  let theWinner = "";

  vegetables.forEach(function (submission) {
    if (metric === "redness") {
      if (submission.redness > theWinningMetric) {
        theWinningMetric = submission.redness;
        theWinner = submission.submitter;
        return theWinner;

      }
    }
    else if (metric === "plumpness") {
      if (submission.plumpness > theWinningMetric) {
        theWinningMetric = submission.plumpness;
        theWinner = submission.submitter;
        return theWinner;
      }
    }
    else if (metric === undefined){
      return 'No winner';
    }
  });

  return theWinner;
};

console.log(judgeVegetable(vegetables, metric));

  */
  
  
  
  
  
  
  
  
 