interface CF7FormField {
  type: string;
  name: string;
  options?: string[];
  labels?: string[];
  values?: string[];
}

interface CF7Form {
  id: number;
  title: string;
  locale: string;
  properties: {
    form: {
      content: string;
      fields: Record<string, CF7FormField>;
    };
    mail: {
      subject: string;
      sender: string;
      body: string;
      recipient: string;
      additional_headers: string;
      attachments: string;
      use_html: boolean;
      exclude_blank: boolean;
    };
  };
}
