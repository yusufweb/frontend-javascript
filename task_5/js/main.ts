// Interface for MajorCredits with a brand property
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

// Interface for MinorCredits with a brand property
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum major credits
const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

// Function to sum minor credits
const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}
