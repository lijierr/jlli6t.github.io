# finding arbitrary quantiles of distributions via simulation

#######################################################################
# simulate many draws (e.g. N=10^6) from a standard normal distribution
#######################################################################
sim.draws = rnorm(10e6)

# what are the upper and lower 2.5%-tiles?
quantile(sim.draws, 0.025)
quantile(sim.draws, 0.975)

# what are the upper and lower 5%-tiles?
quantile(sim.draws, 0.05)
quantile(sim.draws, 0.95)

# what are the upper and lower 1.5%-tiles?
quantile(sim.draws, 0.015)
quantile(sim.draws, 0.985)

# of course, we can use built-in quantiles from R
# but think about how these quantiles are tabulated in the first place...
qnorm(0.015)
qnorm(0.985)

######################################################################
# simulate many draws (e.g. N=10^6) from a t distribution with df = 41
######################################################################
sim.tdraws = rt(10e6, df=41)

# what are the upper and lower 2.5%-tiles?
quantile(sim.tdraws, 0.025)
quantile(sim.tdraws, 0.975)

# what are the upper and lower 5%-tiles?
quantile(sim.tdraws, 0.05)
quantile(sim.tdraws, 0.95)

# what are the upper and lower 1.5%-tiles?
quantile(sim.tdraws, 0.015)
quantile(sim.tdraws, 0.985)

# again, we can use built-in quantiles from R
# but think about how these quantiles are tabulated in the first place...
qt(0.985, df=41)

# manually construct t-variables with df=41
numerator = rnorm(10e6) #numerator is standard normal
denominator = sqrt(rchisq(10e6, df=41)/41) # denominator is sqrt(scaled chisq)
pivot = numerator/denominator

# check that the pivot has same quantiles as the t distribution
quantile(pivot, 0.015)
quantile(pivot, 0.985)

##########################################################################
# simulate many draws (e.g. N=10^6) from a chisq distribution with df = 24
##########################################################################
sim.chisqdraws = rchisq(10e6, df=24)
quantile(sim.chisqdraws, 0.025)
quantile(sim.chisqdraws, 0.975)

