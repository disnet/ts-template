interface Status {
  status: string;
}

export default function init(): Status {
  return {
    status: 'ready',
  };
}
