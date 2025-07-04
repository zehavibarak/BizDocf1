import { Component, inject, OnInit } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DocumentModel, MailboxService, RecipientModel } from '@bizdoc/core';

export const recipientResolver: ResolveFn<boolean> = (route, state) => {
  const mailbox = inject(MailboxService);

  return route.data['data'] ||
    mailbox.get(route.params['id']);
};
