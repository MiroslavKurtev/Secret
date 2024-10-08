const formatSeconds = function (seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  let returnedTime = '';

  if (formattedHours !== '00') returnedTime = `${formattedHours}:`;

  returnedTime = returnedTime + `${formattedMinutes}:${formattedSeconds}`;

  return returnedTime;
};

export { formatSeconds };
