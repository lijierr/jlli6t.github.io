# critical value for alpha = 0.05 and n=15 samples
# under the null lambda = 7.3
qpois(0.95, lambda = 15*7.3)

# so the rule should be total >= 128
# can check >= 128 just drops below 5%
1 - ppois(126, lambda = 15*7.3)
1 - ppois(127, lambda = 15*7.3)
1 - ppois(128, lambda = 15*7.3)


# computing the power at lambda1 = 9.0
lambda1 = 9.0
power = 1 - ppois(127, 15*lambda1)
power

# evaluating and plotting the power curve
# create a grid of values of p from 7.3 to 11.0 in steps of 0.01
lambda1 = (730:1100)/100

# power of the test "reject H0 if total >= 128" evaluated at each lambda
power= 1- ppois(127, 15*lambda1)

# plot the power curve against lambda:
plot(lambda1, power, type="l")

# add title to the graph
mtext("Power curve of the test \"reject lambda=7.3 if Xbar >= 8.53\" ")

# what if we naively used the t-test instead of the optimal LRT?
# what would the power be if true lambda = 9.0?
n = 15 # set sample size
reject = vector() # empty vector to store our rejection decisions
for(i in 1:10000){
  sim.data = rpois(n, lambda = 9.0) # simulate data under the alternative
  xbar = mean(sim.data) # sample mean of the simulated data
  s = sd(sim.data) # sample standard deviation of the simulated data
  reject[i] = (xbar >= 7.3 + qt(0.95, n-1)*s/sqrt(n)) # reject using the t-rule
}
power = mean(reject) # rejection rate
power

# repeat these power calculations for alternative lambdas from 7.3 to 11.0 and compare power curves

# g) p-value for the test based on the observed data
obs.counts = c(7,11,10,11,6,7,10,9,7,5,11,5,9,6,18)
# total number of calls
sum(obs.counts)
# p-value P(Pois(15*7.3) >= 132)
1 - ppois(131, 15*7.3)
