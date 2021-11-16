// https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(correctAnswers: string[], submittedAnswers: string[]): number
{
	let finalGrade:number = 0;
	for (let answer:number = 0; answer < correctAnswers.length; ++answer)
	{

		if (correctAnswers[answer] === submittedAnswers[answer])
		{
			finalGrade += 4

		}
		else
		{
			if (submittedAnswers[answer] === '')
			{
				finalGrade += 0;
			}
			else
			{
				finalGrade -= 1;

			}

		}


	}

	return finalGrade < 0 ? 0 : finalGrade
}

const
{
	log
}:Console = console;

log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))