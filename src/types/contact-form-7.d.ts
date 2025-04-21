interface CF7FormField {
  labels?: string[];
  name: string;
  options?: string[];
  type: string;
  values?: string[];
}

interface CF7Form {
  id: number;
  locale: string;
  properties: {
    form: {
      content: string;
      fields: Record<string, CF7FormField>;
    };
    mail: {
      additional_headers: string;
      attachments: string;
      body: string;
      exclude_blank: boolean;
      recipient: string;
      sender: string;
      subject: string;
      use_html: boolean;
    };
  };
  title: string;
}
