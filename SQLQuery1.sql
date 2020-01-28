create procedure execcalculator @input1 int,@input2 int,@operator varchar(1)
as
	if @operator ='+'
	begin
		insert into dbo.arithmetic (@input1,@input2,@operator,@input1+@input1 )
	end
	if @operator = '-'
	begin
		insert into dbo.arithmetic (@input1,@input2,@operator,@input1-@input2 )
	end
	if @operator = '*'
	begin
		insert into dbo.arithmetic (@input1,@input2,@operator,@input1*@input2 )
	end
	if @operator = '/'
	begin
		insert into dbo.arithmetic (@input1,@input2,@operator,@input1/@input2 )
	end
go