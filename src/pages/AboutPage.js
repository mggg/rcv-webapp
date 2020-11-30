import React from "react";
import { Container } from "react-bootstrap";

function AboutPage() {
  return (
    <Container>
      {/* <Row style={{ height: "max" }}> */}
      <h1 className="text-center">About This Project</h1>
      <div>
        <h3>Modelling voting behavior</h3>
        <p>
          Voting is an incredibly complex process, and any attempt to model it
          is bound to oversimplify the way people vote, especially in ranked
          elections, where a voter has so many more ways to make their voice
          heard. With this in mind, this app uses multiple models of ranking,
          some classical and some new. They all take the same basic input.
        </p>
        <h3>Basic inputs to the models</h3>
        <p>
          All the models take some basic inputs, namely the support from each
          group for each class of candidate (minority- or majority-preferred),
          which should be numbers between 0 and 1. These values can be estimated
          by analyzing single-winner elections, inferred from survey results, or
          set to hypothetical values. Each model interprets these support values
          slightly differently, as detailed below.
        </p>
        <h3>How the model works: Plackett-Luce</h3>
        <p>
          The Plackett-Luce model is a classical model of statistical ranking
          which has already been applied to study ranked choice voting in
          Ireland [1]. Let's suppose the support for Candidate A from a voting
          group is twice the support for Candidate B. Under the Plackett-Luce
          model, we take this to mean that a voter is twice as likely to put
          Candidate A first as to put Candidate B first. In fact, the model
          assumes that this trend goes <em>all the way down the ballot</em>.
          That is, if a voter has not ranked either A or B yet on their ballot,
          then they are still twice as likely to write down Candidate A's name
          than Candidate B when they get to the next rank. See [2] for
          mathematical details. It is unrealistic to expect the support for each
          class of candidates to be completely uniform, so to divide up the
          total support among candidates of a given class, we sample from a
          symmetric Dirichlet distribution. The Dirichlet distribution has one
          parameter (called concentration) which can be used to choose between
          mostly even division of support (concentration &gt;&gt; 1), and
          support concentrated on just a few candidates (concentration &lt;&lt;
          1). The default concentration value of 1.0 makes every division of the
          support equally likely, roughly speaking. We therefore refer to this
          parameter as
          <em>evenness of support</em> in the Model input tab.
        </p>
        <h3>How the model works: Bradley-Terry</h3>
        <p>
          The paired comparison model is based on the idea that what matters in
          a ranking is who is preferred over whom. Suppose the support by a
          voting group for Candidate A is <em>a</em> and the support for
          Candidate B is <em> b</em>. This the model sets the probability that a
          voter in the group ranks Candidate A above Candidate B at{" "}
          <em>a/(a+b)</em>. The probability of a full ranking is just the
          product of the probabilities associated with the order of each pair of
          candidates, with a normalizing constant so that everything sums to
          one. See [2] for mathematical details. As with the Plackett-Luce
          model, we use a Dirichlet sampler to divide up the support among the
          candidates.
        </p>
        <h3>How the model works: Alternating crossover</h3>
        <p>
          This model posits that there are two kinds of voters in each group:
          block voters and crossover voters. Block voters always vote for
          ingroup candidates first and then outgroup candidates. Crossover
          voters alternate between the two classes of candidates, starting with
          an outgroup candidate (hence the name). This only tells you the type
          of candidate at each position in a ballot, however, so further choices
          are necessary to determine the exact order. For each group of voters
          and group of candidates, we allow two choices: random ordering by each
          voter, or consistent ordering by each voter. This model has been used
          in previous analyses of ranked voting by the MGGG at Tufts University
          (see [3,4] below).
        </p>
        <h3>How the model works: Cambridge sampler</h3>
        <p>
          Each voter's first choice under this model is the same as under
          alternating crossover, i.e. an ingroup candidate for block voters and
          an outgroup candidate for crossover voters. However, instead of
          allowing only a block ballot or alternating ballot, the types of
          candidates in the rest of the ballot are determined by sampling from
          the ballots in a decade's worth of Cambridge MA ranked choice city
          council elections. Once the type of candidate (ingroup or outgroup) at
          each rank has been chosen, random ordering or consistent ordering is
          applied to fill in the ballot with candidate names just as with the
          alternating crossover model.
        </p>
        <h3>References</h3>
        [1] Gormley, I.S, and Murphy, T.B.{" "}
        <em>
          Exploring voting blocs within the Irish electorate: A mixture modeling
          approach.
        </em>{" "}
        Journal of the American Statistical Association 103.483 (2008):
        1014-1027.
        <br />
        [2] Critchlow, D.E., Fligner, M.A. and Verducci, J.S., 1991.{" "}
        <em>Probability models on rankings</em>. Journal of mathematical
        psychology, 35(3), pp.294-318.
        <br />
        [3] MGGG, <em>Election Reform in Lowell MA, </em>{" "}
        <a href="https://mggg.org/lowell">https://mggg.org/lowell</a>
        <br />
        [4] MGGG,{" "}
        <em>
          Analysis of county commission elections in Yakima County WA,{" "}
        </em>{" "}
        <a href="https://mggg.org/uploads/yakima.pdf">
          https://mggg.org/uploads/yakima.pdf
        </a>
      </div>
    </Container>
  );
}

export default AboutPage;
