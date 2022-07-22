{:ok, connection} = AMQP.Connection.open()
{:ok, channel} = AMQP.Channel.open(connection)

AMQP.Queue.declare(channel, "hello")
