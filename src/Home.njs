import Nullstack from 'nullstack';
import './Home.scss';
import story from './story.js';

class Home extends Nullstack {

	steps = [story[0]];

	static async getSteps({ params }) {
		const step = +params.step;
		if (step && step <= story.length) {
			const numStep = parseInt(step) - 1;
			const tmpData = story[numStep];
			if (tmpData.paths?.length) {
				return [...tmpData.paths.map(p => story[p]), tmpData];
			}
		}
	}

	async hydrate({ params }) {
		try {
			const steps = await this.getSteps({ params });
			this.steps = steps || this.steps;
		} catch (e) {
			console.log(e);
		}
	}

  render() {
    return (
	    <>
	      <section>
	      	<h1 class="title">História História História História História História História História História</h1>
	       	<>
	       		{this.steps.map(step =>
		       		<article>
			        	<p>{step.text}</p>
			        	{step.choices?.length &&
			          	<div class="buttons">
			          		{step.choices.map(choice =>
			          			<a href={choice.link}>{choice.text}</a>
			          		)}
			          	</div>
			        	}
			        </article>
			    	)}
			    </>
	      </section>
    	</>
    )
  }

}

export default Home;
