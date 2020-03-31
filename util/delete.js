async function deleteMsg(channel, limit) {
  await channel.messages
    .fetch({ limit })
    .then((messages) => {
      // Fetches the messages
      channel.bulkDelete(
        messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
      );
    })
    .catch(() =>
      channel
        .send(
          limit - 1
            ? `Não foi possível deletar ${limit - 1} mensagens, tente novamente`
            : 'Não foi enviado um valor válido, use somente números!'
        )
        .then((msg) => msg.delete({ timeout: 10000 }))
    );
}

module.exports = deleteMsg;
