var DFN;
DFN.tiered = function(base, tier)
{
	base = new Decimal(base);
	tier = new Decimal(tier);
	if (tier.eq(0))
	{
		return base.mul(base.add(1)).div(2)
	}
	else
	{
		if (base.gte(2))
		{
			return base.tetrate(tier).mul(this.tiered(base,tier))
		}
		else
		{
			return new Decimal(1);
		}
	}
}
DFN.twoArrays = function(base, ...[args[0], args[1]])
{
	if (args[1].eq(1))
	{
		return this.tiered(base, args[0]);
	}
	else
	{
		if (base.gte(2))
		{
			return this.tiered(base, DFN.twoArrays(base.sub(1), args[0], args[1].sub(1)))
		}
		else
		{
			return new Decimal(1);
		}
	}
}
DFN.threeArrays = function(base, ...[args[0], args[1], args[2]])
{
	if (args[2].eq(1))
	{
		return this.twoArrays(base, args[0], args[1]);
	}
	else
	{
		if (base.gte(2))
		{
			return this.tiered(base, DFN.threeArrays(base.sub(1), args[0], args[1], args[2].sub(1)))
		}
		else
		{
			return new Decimal(1);
		}
	}
}
